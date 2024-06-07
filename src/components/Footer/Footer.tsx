import { Link } from "react-router-dom";
import { memo } from "react";
import styles from "./Footer.module.scss";

const Footer = memo(() => {
    console.log("Footer");
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Link to="/" className={styles.footer__logo}>
                    Goods4you
                </Link>
                <ul className={styles.footer__items}>
                    <li className={styles.footer__item}>
                        <Link to="/#catalog-id" className={styles.footer__link}>
                            Catalog
                        </Link>
                    </li>
                    <li className={styles.footer__item}>
                        <Link to="/#faq-id" className={styles.footer__link}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
});

export default Footer;
