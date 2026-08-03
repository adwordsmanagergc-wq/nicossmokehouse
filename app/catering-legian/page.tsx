import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("legian");

export default function Page() {
  return <SuburbCateringPage slug="legian" />;
}
