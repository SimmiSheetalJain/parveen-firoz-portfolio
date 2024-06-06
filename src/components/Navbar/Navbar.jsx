import React, {useState} from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import menuIcon from "../../assets/nav/menuIcon.png"
import closeIcon from "../../assets/nav/closeIcon.png"
import logo from "../../assets/nav/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className={styles.navbar}>
        <Link to='/' className={`${styles.title} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text md:text-[40px]`}>Ansari</Link>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
              menuOpen? closeIcon:
              menuIcon     
            } alt="menu-button"  onClick={handleMenu}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen} text-[#96b4b4] md:font-bold`}>
                <li><Link to="/about" className={`${styles.menuItem} text-[20px] hover:text-white`}>About</Link></li>
                <li><Link to="/skills" className={`${styles.menuItem} text-[20px] hover:text-white`}>Skills</Link></li>
                <li><Link to="/work"className={`${styles.menuItem} text-[20px] hover:text-white`}>My Work</Link></li>
                {/* <li><Link to="/projects" className={`${styles.menuItem} text-[20px] hover:text-white`}>Projects</Link></li> */}
                <li><Link to="/contact" className={`${styles.menuItem} text-[20px] hover:text-white`}>Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar