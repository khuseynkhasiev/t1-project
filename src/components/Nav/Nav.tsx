import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

function Nav() {
    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.nav__logoText}>
                Goods4you
            </Link>
            <ul className={styles.nav__items}>
                <li className={styles.nav__item}>
                    <Link to="/#catalog-id" className={styles.nav__link}>
                        Catalog
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/#faq-id" className={styles.nav__link}>
                        FAQ
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/my-cart" className={styles.nav__link}>
                        <div className={styles.nav__cartContainer}>
                            <p className={styles.nav__textCart}>Cart</p>
                            <div className={styles.nav__cartIcon}>
                                <div className={styles.nav__cartCount}>
                                    <p className={styles.nav__count}>1</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
