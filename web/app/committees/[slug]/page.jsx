import { notFound } from "next/navigation";
import CommitteeSection from "@/components/CommitteePages";
import { committeeData } from "@/data/committees";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = committeeData[slug];

  if (!data) {
    return {
      title: "Committee Not Found",
    };
  }

  return {
    title: data.title,
    description: `Detailed information about ${data.title} committee. ${data.subTitle}`,
    openGraph: {
      title: `${data.title} - Rayfelmun'25`,
      description: data.description.substring(0, 150) + "...",
      images: [
        {
          url: data.imageSrc,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
  };
}

const CommitteePage = async ({ params }) => {
  const { slug } = await params;
  
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
