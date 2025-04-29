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
      className="relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
      style={{ aspectRatio: '1/1' }}
    >
        <Link
          href={"/team#" + member.id}
          fill
          className="object-cover object-center"
        >
          <Image src={image} alt="image" fill />
        </Link>
      </div>
    </>
  );
};

export default TeamMember;
