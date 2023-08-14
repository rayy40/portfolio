"use client";

import React from "react";
import styles from "@/styles/page.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  const variants = {
    initial: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "bottom",
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const diffVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  return (
    <div className={styles.title_container}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className={styles.title_wrapper}
      >
        FRONTEND DEV,
      </motion.div>
      <div className={styles.title_wrapper}>
        <motion.span
          variants={diffVariants}
          initial="initial"
          animate="animate"
        >
          LIVING IN
        </motion.span>
        <div className={styles.title_chunk_wrapper}>
          <motion.span
            variants={variants}
            initial="initial"
            animate="animate"
            className={styles.title_chunk}
          >
            KOLKATA,
          </motion.span>
          <motion.span
            variants={variants}
            initial="initial"
            animate="animate"
            className={styles.title_chunk}
          >
            INDIA
          </motion.span>
        </div>
      </div>
    </div>
  );
}
