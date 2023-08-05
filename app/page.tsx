import styles from "./page.module.css";
import Image from "next/image";
import project_one from "@/public/images/ecommerce.jpg";
import project_two from "@/public/images/maths.jpg";
import project_three from "@/public/images/football.jpg";
import project_four from "@/public/images/pdf.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.main_section}>
        <div className={styles.personal_details}>
          <h1 className={styles.title}>
            RAYYAN <br /> ALAM,
          </h1>
          <h3 className={styles.sub_title}>
            A frontend dev living in Kolkata, India.
          </h3>
        </div>
        <div className={styles.tech_stacks}></div>
      </section>
      <section
        className={`${styles.main_section} ${styles.main_section_works}`}
      >
        <div className={styles.projects_container}>
          <ul className={styles.projects_list}>
            <li className={styles.project_wrapper}>
              <h3 className={styles.project_title}>Maths Calculator</h3>
              <div className={styles.project_img_wrapper}>
                <Image
                  className={styles.project_img}
                  layout="fill"
                  objectFit="cover"
                  src={project_two}
                  alt="maths-website"
                />
              </div>
              <p className={styles.project_description}>
                A website that shows mathematical formulas of all 2d and 3d
                figures, and calculate them. And also perform matrix
                calculations, and solve equations to get roots.
              </p>
            </li>
            <li className={styles.project_wrapper}>
              <h3 className={styles.project_title}>Empyrean PDF</h3>
              <div className={styles.project_img_wrapper}>
                <Image
                  className={styles.project_img}
                  layout="fill"
                  objectFit="cover"
                  src={project_four}
                  alt="maths-website"
                />
              </div>
              <p className={styles.project_description}>
                A website that deals with all necessary pdf conversions, like
                pdf to jpg and vice versa, compressing pdfs, rotating and
                deleting pages and many more.
              </p>
            </li>
            <li className={styles.project_wrapper}>
              <h3 className={styles.project_title}>Next Sneakers</h3>
              <div className={styles.project_img_wrapper}>
                <Image
                  className={styles.project_img}
                  layout="fill"
                  objectFit="cover"
                  src={project_one}
                  alt="maths-website"
                />
              </div>
              <p className={styles.project_description}>
                A complete e-commerce website which sells sneakers.
              </p>
            </li>
            <li className={styles.project_wrapper}>
              <h3 className={styles.project_title}>Flooks</h3>
              <div className={styles.project_img_wrapper}>
                <Image
                  className={styles.project_img}
                  layout="fill"
                  objectFit="cover"
                  src={project_three}
                  alt="maths-website"
                />
              </div>
              <p className={styles.project_description}>
                A website which has various sports data such as football,
                basketball, baseball, rugby, cricket, american-football, hockey.
              </p>
            </li>
            <li></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
