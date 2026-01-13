import { Outlet, useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import { useState } from "react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Web design & Devlopment",
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
      title: "Web & App Remodelling",
      img: "/img4.JPG",
      blurred: true,
    },
  ];



  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What does the process look like ?",
      answer:
        <div>
          <p>My web and app process consists of the following 5 steps:</p>
          <p>1.  Discovery & Research</p>
          <p>2.  Strategic Planning</p>
          <p>3.  Wireframing & Prototyping</p>
          <p>4.  Visual Design & Development</p>
          <p>5.  Launch</p>
        </div>
    },
    {
      question: "Do you work with a team?",
      answer:
        "I'm an independent software developer & engineer offering design, Website and Mobile development. While I work alone for most projects, occasionally I team up with experts for copywriting or specialized code when a project requires it.",
    },
    {
      question: "What's the investment?",
      answer:
        "The investment depends on the scope of the project, but I offer flexible pricing and can share options once I understand your needs.",
    },
    {
      question: "Why Clients Choose Me",
      answer:
        "Clients choose me for clean, responsive builds, clear communication, and reliable delivery focused on real results.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const navigate = useNavigate();
  function handleClick() {
    navigate("/requestproject");
  }
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            High-converting <br /> Websites and <br /> Apps for fast- <br /> growing tech startups
          </h1>
          <p className={styles.subtitle}>
            As a designer and developer, I specialized in working with
            marketers and tech founders to launch their new digital presence.
          </p>
          <button onClick={handleClick} className={styles.btn} >Request a project →</button>
        </div>

        <div className={styles.right}>
          <img src="/Hero2.jpg" alt="Hero" className={styles.image} />
        </div>
        <Outlet />
      </section>


      <section>
        <div className={styles.portfolioContainer}>
          <h1 className={styles.head}>Portfolio</h1>
          <p className={styles.subhead}>
            Flip through some of my case studies and learn about real business
            results my sites drove.
          </p>

          <div className={styles.grid}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${styles.card} ${project.blurred ? styles.blurred : ""
                  }`}
              >
                <img src={project.img} alt={project.title} />
                <div className={styles.others}>{project.title}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>FAQ</h2>

        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.question}>
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "×" : "+"}
                </span>
              </div>
              <div
                className={`${styles.answer} ${activeIndex === index ? styles.showAnswer : ""
                  }`}
              >
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactWrapper}>
          <h1>Ready For Your New Site ?</h1>
          <p>Let's discuss your project and see how I can help bring your vision to life.</p>
          <button onClick={() => navigate('/requestproject')} className={styles.btn}>
            Request a project →
          </button>
        </div>
      </section>


    </>
  );
}