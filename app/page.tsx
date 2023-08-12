import styles from "@/styles/page.module.css";
import { Projects } from "@/lib/projects";
import Title from "@/components/features/Title";
import Card from "@/components/features/Card";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.main_section}>
        <div className={styles.hero_container}>
          <Hero />
        </div>
      </section>
      <section className={styles.projects_container}>
        <div className={styles.projects_col_wrapper}>
          <div className={styles.projects_list_wrapper}>
            <ul className={styles.projects_list}>
              {Projects.map((project) => (
                <li className={styles.list_item} key={project.id}>
                  <Title id={project.id} title={project.name} />
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
