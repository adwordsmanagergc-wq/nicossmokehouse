import { Hono } from "hono";
import { cors } from "hono/cors";

interface EmailParams {
  to: string;
  subject: string;
  html_body?: string;
  text_body?: string;
  reply_to?: string;
  broadcast?: boolean;
}

interface EmailResult {
  success: boolean;
  message_id?: string;
  error?: string;
}

interface EmailService {
  send(params: EmailParams): Promise<EmailResult>;
}

interface WorkerEnv {
  OPENAI_API_KEY: string;
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  DB: D1Database;
  EMAILS: EmailService;
  [key: string]: unknown;
}

const app = new Hono<{ Bindings: WorkerEnv }>();

app.use("*", cors());

// Handle trailing slashes - redirect to non-trailing slash version
app.use("*", async (c, next) => {
  const url = new URL(c.req.url);
  // If path has trailing slash (except for root "/"), redirect to version without it
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    const newPath = url.pathname.slice(0, -1) + url.search;
    return c.redirect(newPath, 301);
  }
  await next();
});

// Table descriptions for the prompt
const TABLE_DESCRIPTIONS: Record<number, string> = {
  1: "the booth table in the bottom right corner",
  2: "the table in the middle left area",
  3: "the table in the upper left near the deer antlers",
};

app.get("/api/health", (c) => {
  return c.json({ status: "ok" });
});

// Track button clicks (GoFood, WhatsApp Order, WhatsApp Booking)
app.post("/api/track-click", async (c) => {
  try {
    const { buttonType, pageUrl } = await c.req.json<{
      buttonType: string;
      pageUrl?: string;
    }>();

    const userAgent = c.req.header("user-agent") || "";

    await c.env.DB.prepare(
      "INSERT INTO click_events (button_type, page_url, user_agent) VALUES (?, ?, ?)"
    ).bind(buttonType, pageUrl || "", userAgent).run();

    return c.json({ success: true });
  } catch (error) {
    console.error("Track click error:", error);
    return c.json({ success: false }, 500);
  }
});

// Send daily analytics report email
app.get("/api/send-daily-report", async (c) => {
  try {
    const REPORT_EMAIL = "adwordsmanagergc@gmail.com";
    
    // Get Bali time (UTC+8)
    const now = new Date();
    const baliOffset = 8 * 60;
    const baliTime = new Date(now.getTime() + (baliOffset + now.getTimezoneOffset()) * 60000);
    const today = baliTime.toISOString().split('T')[0];
    const yesterday = new Date(baliTime.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    // Check if report was already sent today
    const existingReport = await c.env.DB.prepare(
      "SELECT * FROM email_reports WHERE report_date = ? AND is_sent = 1"
    ).bind(today).first();

    if (existingReport) {
      return c.json({ success: false, message: "Report already sent today" });
    }

    // Get yesterday's click stats
    const stats = await c.env.DB.prepare(`
      SELECT 
        button_type,
        COUNT(*) as click_count
      FROM click_events 
      WHERE DATE(created_at) = ?
      GROUP BY button_type
    `).bind(yesterday).all();

    // Get total clicks today so far
    const todayStats = await c.env.DB.prepare(`
      SELECT 
        button_type,
        COUNT(*) as click_count
      FROM click_events 
      WHERE DATE(created_at) = ?
      GROUP BY button_type
    `).bind(today).all();

    // Get all-time totals
    const allTimeStats = await c.env.DB.prepare(`
      SELECT 
        button_type,
        COUNT(*) as click_count
      FROM click_events 
      GROUP BY button_type
    `).all();

    // Build stats object
    const yesterdayClicks: Record<string, number> = {};
    const todayClicks: Record<string, number> = {};
    const allTimeClicks: Record<string, number> = {};

    type ClickRow = { button_type: string; click_count: number };

    (stats.results as ClickRow[] | undefined ?? []).forEach((row) => {
      yesterdayClicks[row.button_type] = row.click_count;
    });

    (todayStats.results as ClickRow[] | undefined ?? []).forEach((row) => {
      todayClicks[row.button_type] = row.click_count;
    });

    (allTimeStats.results as ClickRow[] | undefined ?? []).forEach((row) => {
      allTimeClicks[row.button_type] = row.click_count;
    });

    const buttonTypes = ['gofood', 'whatsapp_order', 'whatsapp_booking'];
    const buttonLabels: Record<string, string> = {
      'gofood': 'GoFood Orders',
      'whatsapp_order': 'WhatsApp Orders',
      'whatsapp_booking': 'WhatsApp Table Bookings'
    };

    // Build email HTML
    const statsRows = buttonTypes.map(type => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #3f3f46;">${buttonLabels[type]}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #3f3f46; text-align: center;">${yesterdayClicks[type] || 0}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #3f3f46; text-align: center;">${todayClicks[type] || 0}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #3f3f46; text-align: center;">${allTimeClicks[type] || 0}</td>
      </tr>
    `).join('');

    const totalYesterday = Object.values(yesterdayClicks).reduce((a, b) => a + b, 0);
    const totalToday = Object.values(todayClicks).reduce((a, b) => a + b, 0);
    const totalAllTime = Object.values(allTimeClicks).reduce((a, b) => a + b, 0);

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #f4f4f5; font-family: Arial, Helvetica, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #f59e0b 100%); padding: 24px 32px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">🔥 Nico's Smokehouse</h1>
      <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.9);">Daily Analytics Report</p>
    </div>
    <div style="padding: 32px;">
      <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 24px; color: #3f3f46;">
        Here's your daily summary of button clicks on your website.
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <thead>
          <tr style="background-color: #f4f4f5;">
            <th style="padding: 12px; text-align: left; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">Button</th>
            <th style="padding: 12px; text-align: center; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">Yesterday</th>
            <th style="padding: 12px; text-align: center; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">Today</th>
            <th style="padding: 12px; text-align: center; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">All Time</th>
          </tr>
        </thead>
        <tbody>
          ${statsRows}
          <tr style="background-color: #fef3c7;">
            <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #18181b;">Total</td>
            <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #18181b; text-align: center;">${totalYesterday}</td>
            <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #18181b; text-align: center;">${totalToday}</td>
            <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #18181b; text-align: center;">${totalAllTime}</td>
          </tr>
        </tbody>
      </table>
      <p style="margin: 0; font-size: 12px; color: #71717a;">
        Report generated: ${baliTime.toLocaleString('en-AU', { timeZone: 'Asia/Makassar' })} (Bali Time)
      </p>
    </div>
    <div style="padding: 24px 32px; border-top: 1px solid #e4e4e7; background-color: #fafafa;">
      <p style="margin: 0; font-size: 12px; color: #71717a; text-align: center;">
        Nico's Smokehouse • Canggu, Bali
      </p>
    </div>
  </div>
</body>
</html>`;

    const textBody = `Nico's Smokehouse - Daily Analytics Report

Yesterday (${yesterday}):
- GoFood Orders: ${yesterdayClicks['gofood'] || 0}
- WhatsApp Orders: ${yesterdayClicks['whatsapp_order'] || 0}
- WhatsApp Bookings: ${yesterdayClicks['whatsapp_booking'] || 0}
- Total: ${totalYesterday}

Today So Far:
- GoFood Orders: ${todayClicks['gofood'] || 0}
- WhatsApp Orders: ${todayClicks['whatsapp_order'] || 0}
- WhatsApp Bookings: ${todayClicks['whatsapp_booking'] || 0}
- Total: ${totalToday}

All Time:
- GoFood Orders: ${allTimeClicks['gofood'] || 0}
- WhatsApp Orders: ${allTimeClicks['whatsapp_order'] || 0}
- WhatsApp Bookings: ${allTimeClicks['whatsapp_booking'] || 0}
- Total: ${totalAllTime}`;

    // Send email
    const emailResult = await c.env.EMAILS.send({
      to: REPORT_EMAIL,
      subject: `🔥 Nico's Smokehouse Daily Report - ${yesterday}`,
      html_body: htmlBody,
      text_body: textBody,
    });

    if (emailResult.success) {
      // Record that report was sent
      await c.env.DB.prepare(
        "INSERT INTO email_reports (report_date, sent_at, is_sent) VALUES (?, datetime('now'), 1)"
      ).bind(today).run();

      return c.json({ success: true, message: "Report sent successfully" });
    } else {
      return c.json({ success: false, error: emailResult.error }, 500);
    }
  } catch (error) {
    console.error("Send daily report error:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

app.post("/api/generate-decoration", async (c) => {
  try {
    const { name, age, tableIds } = await c.req.json<{
      name: string;
      age?: string;
      tableIds: number[];
    }>();

    const apiKey = c.env.OPENAI_API_KEY;
    if (!apiKey) {
      return c.json({ error: "OpenAI API key not configured" }, 500);
    }

    // Build table location descriptions
    const tableLocations = tableIds
      .map(id => TABLE_DESCRIPTIONS[id])
      .filter(Boolean)
      .join(" and ");

    // Create a detailed prompt for DALL-E to generate a decorated restaurant scene
    const prompt = `A warm, cozy BBQ restaurant interior with rustic wooden walls and warm lighting. The scene shows a beautiful birthday celebration setup at ${tableLocations}. 

The decorations include:
- Large shiny gold number balloons showing "${age || 'Happy Birthday'}" floating above the table
- A golden banner with the name "${name.toUpperCase()}" displayed prominently on the wall behind the table
- Clusters of colorful balloons (red, teal, yellow, pink, gold) tied to the chairs
- The table is set with party decorations and a small birthday cake
- Warm ambient lighting with industrial pendant lamps
- Rustic wooden paneling on the walls

The style should be photorealistic, warm and inviting, like an actual restaurant celebration photo. Make it look festive and special for a birthday party.`;

    // Call OpenAI DALL-E 3 API
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        quality: "standard",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", errorText);
      return c.json({ error: `OpenAI API error: ${errorText}` }, 500);
    }

    const result = await response.json() as {
      data?: Array<{ url?: string }>;
    };

    const imageUrl = result.data?.[0]?.url;
    if (!imageUrl) {
      return c.json({ error: "No image generated" }, 500);
    }

    return c.json({ imageUrl });
  } catch (error) {
    console.error("Decoration generation error:", error);
    return c.json(
      { error: `Failed to generate decoration: ${error}` },
      500
    );
  }
});

// Catch-all: serve static assets for non-API routes (SPA support)
app.get("*", async (c) => {
  const url = new URL(c.req.url);
  const pathname = url.pathname;
  
  // Check if this is a file request (has extension like .js, .css, .png, etc.)
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathname);
  
  if (hasExtension) {
    // For actual files, try to serve them directly
    try {
      const response = await c.env.ASSETS.fetch(c.req.raw);
      return response;
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }
  
  // For all other routes (SPA pages), serve index.html
  try {
    const indexRequest = new Request(new URL("/index.html", url.origin).toString(), {
      method: "GET",
      headers: c.req.raw.headers,
    });
    const response = await c.env.ASSETS.fetch(indexRequest);
    
    // Clone response and ensure it returns 200 for SPA routes
    return new Response(response.body, {
      status: 200,
      headers: response.headers,
    });
  } catch (error) {
    console.error("Asset fetch error:", error);
    // Serve minimal valid HTML that doesn't redirect
    return new Response(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nico's Smokehouse - BBQ & Grill Canggu Bali</title>
          <meta name="description" content="The best BBQ in Canggu, Bali. Texas smoked brisket, Jamaican jerk chicken, and Peri Peri flame-grilled chicken.">
        </head>
        <body>
          <h1>Nico's Smokehouse</h1>
          <p>BBQ & Grill - Canggu, Bali</p>
          <p>Texas BBQ • Caribbean Soul Food • Peri Peri</p>
          <p>Open Daily: 12pm - 12am</p>
          <p>Location: Jl. Pantai Berawa No.99, Tibubeneng, Canggu</p>
          <p><a href="https://wa.me/6287867966662">Contact us on WhatsApp</a></p>
        </body>
      </html>
    `, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
});

// Global error handler for uncaught errors
app.onError((err, c) => {
  console.error("Server error:", err);
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Nico's Smokehouse - BBQ & Grill Canggu Bali</title>
        <meta name="description" content="The best BBQ in Canggu, Bali. Texas smoked brisket, Jamaican jerk chicken, and Peri Peri flame-grilled chicken.">
      </head>
      <body>
        <h1>Nico's Smokehouse</h1>
        <p>BBQ & Grill - Canggu, Bali</p>
        <p>Open Daily: 12pm - 12am</p>
        <p><a href="https://wa.me/6287867966662">Contact us on WhatsApp</a></p>
      </body>
    </html>
  `, 200);
});

export default app;
