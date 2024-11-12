import Link from "next/link";
import React from "react";
import "../../styles/navbar/NavLink.css"
const NavLink = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <div  className="navlink">
    <Link href={slug || "/"}>
      {name}
    </Link>
    </div>
  );
};  

export default NavLink;
 