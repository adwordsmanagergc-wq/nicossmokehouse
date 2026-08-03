import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("uluwatu");

export default function Page() {
  return <SuburbCateringPage slug="uluwatu" />;
}
