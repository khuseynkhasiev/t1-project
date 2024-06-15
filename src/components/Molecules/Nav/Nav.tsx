import { Link } from "react-router-dom";
import { useGetCartQuery } from "../../../store/api/cartsApi";
import styles from "./Nav.module.scss";
import LogoLink from "../../Atoms/LogoLink/LogoLink";

function Nav() {
    const { data: cart = {}, isError } = useGetCartQuery(1);

    if (isError) {
        console.error("Error loading the number of items in the cart");
    }
    return (
        <nav className={styles.nav}>
            <LogoLink />
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
                                {Boolean(cart.totalProducts) && (
                                    <div className={styles.nav__cartCount}>
                                        <p className={styles.nav__count}>
                                            {cart.totalProducts}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
