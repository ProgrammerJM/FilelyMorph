"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa6";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={"ghost"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="transition-colors duration-300"
    >
      {resolvedTheme === "dark" ? (
        <BsSunFill className="text-yellow-500" size={20} />
      ) : (
        <FaMoon className="text-yellow-500" size={20} />
      )}
    </Button>
  );
}
