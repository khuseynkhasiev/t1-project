import { useGetCartQuery } from "../../store/api/cartsApi";
import CartPrice from "../../components/CartPrice/CartPrice";
import CartProducts from "../../components/CartProducts/CartProducts";
import styles from "./MyCart.module.scss";

function MyCart() {
    const { data = [], isError, isLoading } = useGetCartQuery(1);

    if (isLoading) {
        return (
            <section className={styles.mycart}>
                <div className={styles.mycart__container}>
                    <h1>Loading...</h1>
                </div>
            </section>
        );
    }
    if (isError) {
        console.error("Error loading");
        return (
            <section className={styles.mycart}>
                <div className={styles.mycart__container}>
                    <h1>Error loading</h1>
                </div>
            </section>
        );
    }

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
