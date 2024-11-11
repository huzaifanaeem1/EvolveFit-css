import Link from "next/link";
import React from "react";
import "../../styles/navbar/NavLink.css"
const NavLink = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link href={slug || "/"} className="navlink">
      {name}
    </Link>
  );
};

export default NavLink;
