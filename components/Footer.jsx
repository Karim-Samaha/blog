import styles from "../styles/footer.module.scss";
const Footer = () => {
    return <section className={styles.footer}>
        <h2>Do You Have Any <span>Doubt!</span></h2>
        <h4>Subscribe To Our <span>News Letter</span></h4>
        <div className={styles.inputContainer}>
            <input placeholder="Email Adress" type="text" />
            <button>Subscribe</button>
        </div>
    </section>
}

export default Footer;