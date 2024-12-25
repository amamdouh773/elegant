import React from "react";
import { branches } from "../assets/branches";
import BranchCard from "./BranchCard";

const Branches = () => {
  return (
    <div className="flex gap-8 items-start justify-center mx-8 my-12 max-lg:flex-col max-lg:items-center">
      {branches.map((branch) => (
        <BranchCard
          key={branch.country}
          country={branch.country}
          hours={branch.hours}
          location={branch.location}
          logo={branch.logo}
          phone={branch.phone}
          mail={branch.mail}
        />
      ))}
    </div>
  );
};

export default Branches;
