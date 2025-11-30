import Image from "next/image";

const teamMembers = [
  { id: 1, img: "/images/team/group.webp", alt: "Group Photo" },
  { id: 2, img: "/images/team/generals.webp", alt: "Generals" },
  { id: 3, img: "/images/team/academy.webp", alt: "Academy Team" },
  { id: 4, img: "/images/team/media.webp", alt: "Media Team" },
  { id: 5, img: "/images/team/admin.webp", alt: "Admin & Logistics Team" },
  { id: 6, img: "/images/team/crisis.webp", alt: "Crisis Team" },
  { id: 7, img: "/images/team/press.webp", alt: "Press Team" },
  { id: 8, img: "/images/team/pr.webp", alt: "PR Team" },
  { id: 9, img: "/images/team/entertainment.webp", alt: "Entertainment Team" },
];

const Team = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">

        <div className="-mx-4 flex flex-wrap justify-center gap-y-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group relative z-10 mx-auto overflow-hidden rounded-xl bg-dark shadow-lg"
                data-wow-delay=".1s"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={member.img}
                    alt={member.alt}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
