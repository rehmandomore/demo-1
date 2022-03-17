import React from "react";
import NavIcons from "./NavIcons";
import UserProfile from "./UserProfile";

type Props = {
  name?: string;
};

const Navbar = ({ name }: Props) => {
  return (
    <div className="flex space-x-5">
      <NavIcons />
      <UserProfile />
    </div>
  );
};

export default Navbar;
