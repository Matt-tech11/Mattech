import styles from "./CaseStudies.module.css";

const caseStudies = [
  {
    id: 1,
    title: "Web design & Development",
    img: "/img6.JPG",
    blurred: true,
  },
  {
    id: 2,
    title: "Mobile Applications Design & Development",
    img: "/img5.JPG",
    blurred: true,
  },
  {
    id: 3,
    title: "High Converting Business Dashboards",
    img: "/img7.JPG",
    blurred: true,
  },
  {
    id: 4,
    title: "Web & App Remodeling",
    img: "/img4.JPG",
    blurred: true,
  },
];

export default function CaseStudies() {
  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.heading}>Case Studies</h1>
      <p className={styles.subtext}>
        Flip through some of my case studies and learn about real business
        results my sites drove.
      </p>

      <div className={styles.grid}>
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className={`${styles.card} ${
              caseStudy.blurred ? styles.blurred : ""
            }`}>
            <img src={caseStudy.img} alt={caseStudy.title} />
            <div className={styles.title}>{caseStudy.title}</div>
          </div>
        ))} 
      </div>
    </div>
  );
}

