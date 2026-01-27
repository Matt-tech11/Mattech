import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  



  const navigate = useNavigate();

  return (
    <>
      {/* HERO / ABOUT */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Software Developer & Engineer from Accra.
          </h1>
          <p className={styles.description}>
            I team up with tech founders and marketers to help them relaunch their business site
          </p>
          <button
            onClick={() => navigate('/requestproject')}
            className={styles.btn}
          >
            Request a project →
          </button>
        </div>

        <section className={styles.reasons}>
          <div className={styles.left}>
            <h1 className={styles.h1}>Why work with me?</h1>
            
            <h2 className={styles.h2}>At home in the tech</h2>
            <p className={styles.p}>
              I specialize in B2B tech startups, helping communicate complex products
              and convert visitors into leads.
            </p>
          
            <h2 className={styles.h2}>Collaborative approach</h2>
            <p className={styles.p}>
              I handle projects autonomously while keeping you involved
              in key decisions.
            </p>
            
            <h2 className={styles.h2}>Faster than most agencies</h2>
            <p className={styles.p}>
              No intermediaries. No hand-offs. Just direct collaboration.
            </p>
          </div>
          
          <div className={styles.right}>
            <img src="/img2.jpg" alt="About" className={styles.image} />
          </div>
        </section>
      </section>

      {/* PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className={styles.processWrapper}>
          {/* LEFT — STICKY */}
          <div className={styles.processLeft}>
            <h1>Design and development process</h1><br></br>
            <p>
              Over the years, I helped tech brands grow,
              refining my process with each project.
            </p><br></br>
            <button onClick={() => navigate('/requestproject')} className={styles.btn}>
              Request a project →
            </button>
          </div>

          <div className={styles.processRight}>
            <div className={styles.card}>
              <h3>1. Strategic Planning</h3>
              <p>The most fundamental and important phase in each project, where we elaborate a clear vision for your site and define our projects success criteria.</p>
            </div>
            <div className={styles.card}>
              <h3>2. Wireframing</h3>
              <p>Based on our strategy, we iteratively define the optimal site structure and page layouts. On top, required content such as copywriting and product screens will be created.</p>
            </div>
            <div className={styles.card}>
              <h3>3. Web Design</h3>
              <p>In this phase, we create the visual style and user interface of your site, ensuring it aligns with your brand and appeals to your target audience.</p>
            </div>
            <div className={styles.card}>
              <h3>4. Development</h3>
              <p>During this phase, the website is built using the latest technologies, ensuring it is responsive, fast, and accessible.</p>
            </div>
            <div className={styles.card}>
              <h3>5. Launch</h3>
              <p>The final phase where the website goes live, and we ensure everything runs smoothly, providing support and making any necessary adjustments.</p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.background}>
        <div className={styles.backgroundProfile}>
        <h1> My Background </h1>
        <p>I've spent my career at the intersection of innovation and technology and public impact.
          With optimizing systems during my time at the intersection of innovation and technology and public impact in Accra  to teaming up with fast-paced tech companies, I focus on making data work for people. Solving problems and believing in the power of technology is born when scientific rigor meets collaborative, real world execution.</p>
        </div>
        <div className={styles.backgroundImage}>
          <img src="/img3.jpg" alt="About" className={styles.image} />
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
  )
}

export default About
