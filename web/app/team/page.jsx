import React from "react";
import teamData from "@/components/Team/TeamData";
import TeamMember from "@/components/Team/TeamMember";

const Team = () => {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <TeamMember member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
