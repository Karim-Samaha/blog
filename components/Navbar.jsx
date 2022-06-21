import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/nav.module.scss';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={styles.sectionOne}>
            <ul>
                <li><AiFillFacebook /></li>
                <li><AiFillInstagram /></li>
                <li><AiFillTwitterSquare /></li>
                <li><AiFillLinkedin /></li>
            </ul>
        </div>
        <div className={styles.sectionTwo}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Contact</Link></li>
                <li><Link href="/">Write</Link></li>
                <li><Link href="/">Logout</Link></li>
            </ul>
        </div>
        <div className={styles.sectionThree}>
            <div>
                <Image src="/person.jpeg" width="50px" height="50px" />
                < AiOutlineSearch />
            </div>
        </div>
    </nav>
}

export default Navbar;