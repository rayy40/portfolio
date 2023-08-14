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
  return project.highlights.map((highlight, index) => (
    <div
      style={{ padding: "3.5rem" }}
      key={index}
      className={styles.img_wrapper}
    >
      <Link
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        href={highlight.link}
      >
        <Image
          className={styles.website_img}
          src={images?.[highlight.img]}
          alt="maths-calculator-website"
        />
      </Link>
    </div>
  ));
}
