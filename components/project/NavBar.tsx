"use client";

import React, { useState } from "react";
import styles from "@/styles/project.module.css";
import Link from "next/link";

type Props = {
  link: string;
};

export default function NavBar({ link }: Props) {
  const [section, setSection] = useState("");

  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu_container}>
        <ul className={styles.menu_container_content}>
          <li
            onClick={() => setSection("highlights")}
            className={`${styles.menu_item} ${
              section === "highlights" && styles.menu_item_active
            }`}
          >
            <Link
              className={`link ${styles.modified_links}`}
              href={"#highlights"}
            >
              Highlights
            </Link>
          </li>
          <li
            onClick={() => setSection("font")}
            className={`${styles.menu_item} ${
              section === "font" && styles.menu_item_active
            }`}
          >
            <Link className={`link ${styles.modified_links}`} href={"#font"}>
              Font
            </Link>
          </li>
          <li
            onClick={() => setSection("tech")}
            className={`${styles.menu_item} ${
              section === "tech" && styles.menu_item_active
            }`}
          >
            <Link className={`link ${styles.modified_links}`} href={"#tech"}>
              Tech Stacks
            </Link>
          </li>
          <li
            onClick={() => setSection("details")}
            className={`${styles.menu_item} ${
              section === "details" && styles.menu_item_active
            }`}
          >
            <Link className={`link ${styles.modified_links}`} href={"#details"}>
              Details
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.visit_site_button}>
          <Link className={`link ${styles.modified_links}`} href={link}>
            Visit Site
          </Link>
        </button>
      </div>
    </div>
  );
}
