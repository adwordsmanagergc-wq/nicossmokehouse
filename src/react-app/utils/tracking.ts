// Button click tracking utility

export type ButtonType = 'gofood' | 'whatsapp_order' | 'whatsapp_booking';

export async function trackClick(buttonType: ButtonType): Promise<void> {
  try {
    const pageUrl = window.location.pathname;
    
    await fetch('/api/track-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buttonType,
        pageUrl,
      }),
    });
  } catch (error) {
    // Silently fail - don't block user action
    console.error('Track click failed:', error);
  }
}

// Wrapper that tracks and then navigates
export function trackAndNavigate(buttonType: ButtonType, url: string): void {
  trackClick(buttonType);
  window.open(url, '_blank');
}
