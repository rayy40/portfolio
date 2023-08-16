import React from "react";
import styles from "@/styles/about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.page_container}>
      <div className={styles.page_container_context}>
        <p className={styles.paragraph}>
          I am Rayyan Alam, a web developer living in Kolkata, India.{" "}
        </p>
        <p className={styles.paragraph}>
          I specialize in crafting innovative websites, drawing inspiration from
          sophisticated online platforms.
        </p>
        <p className={styles.paragraph}>
          I began creating websites as a hobby, which has now evolved into a
          true passion.
        </p>
        <div className={styles.get_in_touch_wrapper}>
          <h3 style={{ fontWeight: "400" }}>Get in Touch</h3>
          <ul className={styles.get_in_touch_list}>
            <li className={styles.get_in_touch_item}>
              <Link
                className="link"
                href={"https://github.com/rayyyyofsunshine?tab=repositories"}
              >
                Github
              </Link>
            </li>
            <li className={styles.get_in_touch_item}>
              <Link className="link" href={"mailto:rayyanalam650@gmail.com"}>
                Gmail
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
