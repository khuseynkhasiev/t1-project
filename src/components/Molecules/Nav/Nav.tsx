import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import LogoLink from "../../Atoms/LogoLink/LogoLink";
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
interface NavProps {
    loggedIn: boolean;
}
const Nav = memo(({ loggedIn }: NavProps) => {
    const cart = useSelector((state: RootState) => state.cart);
    return (
        <nav className={styles.nav}>
            <LogoLink />
            {loggedIn && (
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
                                    {!cart.isDeleted &&
                                        Boolean(cart.totalQuantity) && (
                                            <div
                                                className={
                                                    styles.nav__cartCount
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.nav__count
                                                    }
                                                >
                                                    {cart.totalQuantity}
                                                </p>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
});

export default Nav;
