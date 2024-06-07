import CartPrice from "../../components/CartPrice/CartPrice";
import CartProducts from "../../components/CartProducts/CartProducts";
import styles from "./MyCart.module.scss";

function MyCart() {
    return (
        <section className={styles.mycart}>
            <div className={styles.mycart__container}>
                <h1 className={styles.mycart__title}>My cart</h1>
                <div className={styles.mycart__infoContainer}>
                    <CartProducts />
                    <CartPrice />
                </div>
            </div>
        </section>
    );
}

export default MyCart;
