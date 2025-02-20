import { Link } from "react-router-dom";
import { memo } from "react";
import styles from "./Footer.module.scss";
import LogoLink from "../../Atoms/LogoLink/LogoLink";

const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <LogoLink />
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
