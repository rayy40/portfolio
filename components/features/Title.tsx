"use client";

import React, { useEffect, useRef } from "react";
import styles from "@/styles/page.module.css";
import { useInView } from "framer-motion";
import { useFeatureStore } from "@/context/store";

type Props = {
  title: string;
  id: number;
};

export default function Title({ title, id }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id.toString());
    if (!isInView && inViewFeature === id.toString()) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      style={{ opacity: isInView ? "1" : " 0.2" }}
      className={styles.list_item_content}
    >
      {title}
    </p>
  );
}
