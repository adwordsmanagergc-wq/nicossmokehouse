import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("berawa");

export default function Page() {
  return <SuburbCateringPage slug="berawa" />;
}
