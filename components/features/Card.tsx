"use client";

import React from "react";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import images from "@/lib/images";
import { useFeatureStore } from "@/context/store";
import { Projects } from "@/lib/projects";
import { motion } from "framer-motion";

type Props = {
  img: string;
  id: number;
};

export default function Card({ img, id }: Props) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const transition = { duration: 0.6, ease: [0.43, 0.01, -0.05, 0.9] };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      style={{ opacity: inViewFeature === id.toString() ? "1" : "0" }}
      className={styles.projects_img_wrapper}
    >
      <Image className={styles.project_img} src={images?.[img]} alt={img} />
      <Link
        className={`link ${styles.button_link}`}
        href={`/projects/${
          inViewFeature !== null &&
          Projects[parseInt(inViewFeature!) - 1]?.name
            .toLowerCase()
            .replace(/\s+/g, "-")
        }`}
      >
        <button className={styles.show_me_btn}>Show me</button>
      </Link>
    </motion.div>
  );
}
