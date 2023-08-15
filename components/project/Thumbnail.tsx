"use client";

import React from "react";
import styles from "@/styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import images from "@/lib/images";
import { motion } from "framer-motion";

type Props = {
  link: string;
  name: string;
  img: string;
};

export default function Thumbnail({ link, name, img }: Props) {
  const isCLient = typeof window !== "undefined";
  const variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className={styles.page_website_container}
    >
      <div className={styles.img_wrapper}>
        <Link
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          {isCLient && (
            <Image
              className={styles.website_img}
              src={images?.[window.innerWidth < 768 ? `m_${img}` : img]}
              alt={`${name}-website`}
            />
          )}
        </Link>
      </div>
    </motion.div>
  );
}
