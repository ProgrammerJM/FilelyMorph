import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-10 mt-10">
      <Link href="/">
        <h1 className="dark:text-white text-black font-bold">FilelyMorph</h1>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
