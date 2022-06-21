import styles from '../styles/body.module.scss';
import Image from 'next/image';
const Author = () => {
    return <div className={styles.author}>
        <h3>About Me</h3>
        <div className={styles.imgContainer}>
            <Image src="/person.jpeg" layout='fill' width="100%" height="100%" />
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit possimus ipsa veritatis tempore corrupti quas voluptate explicabo soluta, ullam earum.</p>
        <h3>Categores</h3>
        <ul>
            <li>Life</li>
            <li>Sport</li>
            <li>Music</li>
            <li>Food</li>
        </ul>
    </div>
}

export default Author