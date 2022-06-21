import styles from '../styles/body.module.scss';
import Author from './Author';
import BlogSection from './BlogSection';
const Body = () => {
    return <section className={styles.body}>
        <BlogSection />
        <Author />
    </section>
}

export default Body;