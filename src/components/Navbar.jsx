import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { GrMenu, GrClose } from 'react-icons/gr'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Matt.Tech</div>
      <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/casestudies" onClick={() => setIsOpen(false)}>Case Studies</Link>
        <Link to="/requestproject" onClick={() => setIsOpen(false)}>Request Project</Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <GrClose /> : <GrMenu />}
      </div>
    </nav>
  )
}

export default Navigation
