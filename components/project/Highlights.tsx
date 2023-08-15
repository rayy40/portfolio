"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/project.module.css";
import images from "@/lib/images";
import { Project } from "@/lib/projects";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function Highlights({ project }: Props) {
  const isClient = typeof window !== "undefined";

  return project.highlights.map((highlight, index) => (
    <div
      key={index}
      className={`${styles.img_wrapper} ${styles.img_extension_wrapper}`}
    >
      <Link
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        href={highlight.link}
      >
        {isClient && (
          <Image
            className={styles.website_img}
            src={
              images?.[
                window.innerWidth < 768 ? `m_${highlight.img}` : highlight.img
              ]
            }
            alt="maths-calculator-website"
          />
        )}
      </Link>
    </div>
  ));
}
