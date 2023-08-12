import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/lib/images";
import { Projects } from "@/lib/projects";
import Title from "@/components/project/Title";
import Thumbnail from "@/components/project/Thumbnail";
import styles from "@/styles/project.module.css";
import Highlights from "@/components/project/Highlights";
import Typography from "@/components/project/Typography";

type Params = { params: { project: string } };

export default function Project({ params: { project } }: Params) {
  const proj = Projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === project
  );

  if (proj === undefined) {
    return <h3>Page not found</h3>;
  }

  return (
    <div className={styles.page_container}>
      <div className={styles.page_wrapper}>
        <Title name={proj?.name} />
        <Thumbnail
          name={proj?.name}
          link={proj?.website_link}
          img={proj?.website_img}
        />
        <section className={styles.page_highlights_container}>
          <h2 className={styles.page_sub_title}>
            See the highlights <br /> of this website.
          </h2>
          <div className={styles.page_highlights_wrapper}>
            <Highlights project={proj} />
          </div>
        </section>
      </div>
      <div className={styles.menu_wrapper}>
        <div className={styles.menu_container}>
          <ul className={styles.menu_container_content}>
            <li className={styles.menu_item}>
              <Link className={`link ${styles.modified_links}`} href={"/"}>
                Highlights
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link className={`link ${styles.modified_links}`} href={"/"}>
                Font
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link className={`link ${styles.modified_links}`} href={"/"}>
                Tech Stacks
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link className={`link ${styles.modified_links}`} href={"/"}>
                Details
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.visit_site_button}>
            <Link className={`link ${styles.modified_links}`} href={"/"}>
              Visit Site
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.details_wrapper}>
        <section className={styles.section_wrapper}>
          <div className={styles.section_header}>Tech Stacks</div>
          <div className={styles.section_content}>
            {proj.tech_stacks.map((tool, index) => (
              <div key={index} className={styles.tool_wrapper}>
                <div className={styles.tool_img_wrapper}>
                  <Image
                    className={styles.tool_img}
                    src={images?.[tool]}
                    alt={`${tool}-icon`}
                  />
                </div>
                <p className={styles.tool_name}>{tool.replace(/_/g, " ")}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section_wrapper}>
          <Typography project={proj} />
        </section>
      </div>
    </div>
  );
}
