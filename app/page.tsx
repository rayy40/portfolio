import styles from "@/styles/page.module.css";
import { Projects } from "@/lib/projects";
import Title from "@/components/features/Title";
import Card from "@/components/features/Card";
import Hero from "@/components/home/Hero";
import images from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const tech = [
    "css_dark",
    "react_dark",
    "next_13_dark",
    "python_dark",
    "mongodb_dark",
    "firebase_dark",
    "sass_dark",
    "node_dark",
  ];

  return (
    <main className={styles.main}>
      <section className={styles.main_section}>
        <div className={styles.hero_container}>
          <Hero />
        </div>
      </section>
      <div className={styles.tech_stacks_container}>
        <div className={styles.tech_stacks_wrapper}>
          {tech.map((t, index) => (
            <div key={index} className={styles.tech_stack}>
              <Image
                className={styles.tech_stack_img}
                src={images?.[t]}
                alt={`${t}-img`}
              />
              <p style={{ textTransform: "capitalize", textAlign: "center" }}>
                {t.split("_")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <section className={styles.projects_container}>
        <div className={styles.projects_col_wrapper}>
          <div className={styles.projects_list_wrapper}>
            <ul className={styles.projects_list}>
              {Projects.map((project) => (
                <li className={styles.list_item} key={project.id}>
                  <Link
                    className="link"
                    href={`/projects/${project.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <Title id={project.id} title={project.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.projects_col_wrapper}>
          <div className={styles.projects_img_container}>
            {Projects.map((project) => (
              <Card
                key={project.id}
                id={project.id}
                img={project.website_img}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
