import styles from '../styles/body.module.scss';
import Image from 'next/image';
const BlogSection = () => {
    return <div className={styles.blogSection}>
        <div className={styles.blogItem}>
            <div className={styles.imgContainer}>
                <Image src="/1.jpeg" width="100%" height="100%" layout="fill" />
            </div>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>1 Hour Ago</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos deserunt eos veritatis eius consectetur, expedita quos velit deleniti ipsa?</p>
        </div>
        <div className={styles.blogItem}>
            <div className={styles.imgContainer}>
                <Image src="/2.jpeg" width="100%" height="100%" layout="fill" />
            </div>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>6 Hour Ago</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos deserunt eos veritatis eius consectetur, expedita quos velit deleniti ipsa?</p>
        </div>
        <div className={styles.blogItem}>
            <div className={styles.imgContainer}>
                <Image src="/9.jpeg" width="100%" height="100%" layout="fill" />
            </div>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>10 Hour Ago</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos deserunt eos veritatis eius consectetur, expedita quos velit deleniti ipsa?</p>
        </div>
        <div className={styles.blogItem}>
            <div className={styles.imgContainer}>
                <Image src="/10.jpeg" width="100%" height="100%" layout="fill" />
            </div>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>20 Hour Ago</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos deserunt eos veritatis eius consectetur, expedita quos velit deleniti ipsa?</p>
        </div>
    </div>
}

export default BlogSection;