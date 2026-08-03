import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("nusa-dua");

export default function Page() {
  return <SuburbCateringPage slug="nusa-dua" />;
}
