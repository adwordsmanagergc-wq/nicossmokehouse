import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("canggu");

export default function Page() {
  return <SuburbCateringPage slug="canggu" />;
}
