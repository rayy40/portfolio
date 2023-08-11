"use client";

import React from "react";
import styles from "@/styles/project.module.css";

type Props = {
  name: string;
};

export default function Title({ name }: Props) {
  return (
    <header className={styles.page_header}>
      <h1 className={styles.page_title}>{name}</h1>
    </header>
  );
}
