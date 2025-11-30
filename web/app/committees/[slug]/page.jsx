import { notFound } from "next/navigation";
import CommitteeSection from "@/components/CommitteePages";
import { committeeData } from "@/data/committees";

const CommitteePage = ({ params }) => {
  const slug = params.slug;
  const data = committeeData[slug];
  
  if (!data) {
    return notFound();
  }
  
  return <CommitteeSection data={data} />;
};

export async function generateStaticParams() {
  return Object.keys(committeeData).map((slug) => ({
    slug: slug,
  }));
}

export default CommitteePage;
