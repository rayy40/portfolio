"use client";

import React from "react";
import styles from "@/styles/project.module.css";
import Link from "next/link";
import Image from "next/image";
import images from "@/lib/images";

type Props = {
  link: string;
  name: string;
  img: string;
};

export default function Thumbnail({ link, name, img }: Props) {
  return (
    <div className={styles.page_website_container}>
      <div className={styles.img_wrapper}>
        <Link
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          <Image
            className={styles.website_img}
            src={images?.[img]}
            alt={`${name}-website`}
          />
        </Link>
      </div>
    </div>
  );
}
