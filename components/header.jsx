import styles from '../styles/header.module.scss';
import Image from 'next/image';
const Header = () => {
    return <section className={styles.header}>
        <Image src="/header.jpeg" layout="fill" />
        <div className={styles.text}>
            <h3>Lorem ipsum</h3>
            <h1>BLOG</h1>
        </div>
    </section>
}

export default Header;