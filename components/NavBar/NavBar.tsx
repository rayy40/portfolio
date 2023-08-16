"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const isClent = typeof window !== "undefined";
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    if (!isClent) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClass("navbar_scrolled");
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClent]);

  return (
    <div className={`navbar_wrapper ${scrollClass}`}>
      <Link className="link" href={"/"}>
        Portfolio
      </Link>
      <Link className="link" href={"/about"}>
        About
      </Link>
    </div>
  );
}
