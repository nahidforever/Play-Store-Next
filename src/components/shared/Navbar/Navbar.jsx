import Image from "next/image";
import React from "react";
import navLogo from "../../../assets/img/logo.png";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2">
        <Image width={60} height={60} src={navLogo} alt="Nav-Logo"></Image>

        <ul className="flex items-center gap-4">
          <MyLink href={"/"}>Home</MyLink>
          <MyLink href={"/apps"}>Apps</MyLink>
          <MyLink href={"/installation"}>Installation</MyLink>
        </ul>

        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
