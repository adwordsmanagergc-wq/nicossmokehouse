import SuburbCateringPage, {
  buildSuburbMetadata,
} from "@/components/catering/SuburbCateringPage";

export const metadata = buildSuburbMetadata("umalas");

export default function Page() {
  return <SuburbCateringPage slug="umalas" />;
}
