"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa6";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsSunFill className="text-yellow-500" size={20} />
      ) : (
        <FaMoon className="text-yellow-500" size={20} />
      )}
    </Button>
  );
}
