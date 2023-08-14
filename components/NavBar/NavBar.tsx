import React from "react";
import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="navbar_wrapper">
      <Link className="link" href={"/"}>
        Portfolio
      </Link>
      <Link className="link" href={"/about"}>
        About
      </Link>
    </div>
  );
}
