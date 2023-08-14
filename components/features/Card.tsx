"use client";

import React from "react";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import images from "@/lib/images";
import { useFeatureStore } from "@/context/store";
import { Projects } from "@/lib/projects";

type Props = {
  img: string;
  id: number;
};

export default function Card({ img, id }: Props) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      style={{ opacity: inViewFeature === id.toString() ? "1" : "0" }}
      className={styles.projects_img_wrapper}
    >
      <Link
        className={`link ${styles.button_link}`}
        href={`/projects/${
          inViewFeature !== null &&
          Projects[parseInt(inViewFeature!) - 1]?.name
            .toLowerCase()
            .replace(/\s+/g, "-")
        }`}
      >
        <Image className={styles.project_img} src={images?.[img]} alt={img} />
        <button className={styles.show_me_btn}>Show me</button>
      </Link>
    </div>
  );
}
