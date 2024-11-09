import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Button } from "../";
import { MdFitnessCenter } from "react-icons/md";
import "../../styles/navbar/Navbar.css"

const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  // {
  //   id: 2,
  //   name: "About us",
  //   slug: "/about",
  // },
  // {
  //   id: 3,
  //   name: "Pricing",
  //   slug: "/pricing",
  // },
  // {
  //   id: 4,
  //   name: "Trainers",
  //   slug: "/trainers",
  // },
];

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="logo">
          <Link href={"/"} className="logo-link">
            <MdFitnessCenter className="icon" />
            <span className="logo-text">Evolve Fit</span>
          </Link>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} name={item.name} />
          ))}
        </nav>

        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="button" className="join-button">
            Join us
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
