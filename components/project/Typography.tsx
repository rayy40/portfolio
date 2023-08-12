"use client";

import React, { useState } from "react";
import styles from "@/styles/project.module.css";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function Typography({ project }: Props) {
  const [fontSelected, setFontSelected] = useState(project.fonts[0]);

  return (
    <>
      <div className={styles.section_header}>
        <span>Typography</span>
        <div className={styles.switch_typography_wrapper}>
          <ul className={styles.switch_typography_list}>
            {project.fonts.map((font, id) => (
              <li
                onClick={() => setFontSelected(font)}
                key={id}
                className={`${styles.switch_typography_item} ${
                  fontSelected === font && styles.active
                }`}
              >
                {font.replaceAll("-", " ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{ fontFamily: `var(--font-${fontSelected})` }}
        className={`${styles.section_content} ${styles.section_typography} `}
      >
        {fontSelected.replaceAll("-", " ")}
      </div>
    </>
  );
}
