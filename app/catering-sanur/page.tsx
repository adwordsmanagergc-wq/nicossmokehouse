import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("sanur");

export default function Page() {
  return <SuburbCateringPage slug="sanur" />;
}
