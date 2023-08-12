"use client";

import React from "react";
import styles from "@/styles/project.module.css";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

export default function Title({ name }: Props) {
  const variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.header className={styles.page_header}>
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        className={styles.page_title}
      >
        {name}
      </motion.h1>
    </motion.header>
  );
}
