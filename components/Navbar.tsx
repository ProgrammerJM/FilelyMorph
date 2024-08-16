import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./Modetoggle";
import LogoImage from "@/assets/filelymorph-logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-20 mt-10">
      <Link href="/">
        <Image
          height={100}
          width={600}
          alt="logo"
          className="cursor-pointer w-40"
          src={LogoImage}
        />
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
