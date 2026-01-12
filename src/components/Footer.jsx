import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaInstagram, FaSnapchat , FaGithub  } from 'react-icons/fa'; 

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)
    
    
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topRow}>
        <div className={styles.logo}>Matt.Tech</div>
            <div className={`${styles.nav} ${isOpen ? styles.showMenu : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/casestudies" onClick={() => setIsOpen(false)}>Case Studies</Link>
                <Link to="/requestproject" onClick={() => setIsOpen(false)}>Request a Project</Link>
            </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            <span>© Copyright 2025. Mathias Seyram.</span>
            <span className={styles.separator}>|</span>
            <a href="/imprint">Imprint</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className={styles.socials}>
            <a href="#"><FaLinkedin /></a>
            <a href="https://x.com/mas_sey11?s=21"><FaTwitter /></a>
            <a href="https://www.instagram.com/_seyrammathias_?igsh=MWQzMXc5ajhwYW5qMw%3D%3D&utm_source=qr"><FaInstagram /></a>
            <a href="https://snapchat.com/t/nyCTfHaL"><FaSnapchat /></a>
            <a href="https://github.com/Matt-tech11"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};