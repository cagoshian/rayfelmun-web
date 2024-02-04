import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ member }) => {
  const { image } = member;
  return (
    <>
      <br />
      <br />
      <div
        id={member.id}
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={"/team#" + member.id}
          className="relative block h-[434.667px] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
      </div>
    </>
  );
};

export default TeamMember;
