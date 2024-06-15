import { useGetCartQuery } from "../../../store/api/cartsApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CartPrice from "../../Atoms/CartPrice/CartPrice";
import CartProducts from "../../Organisms/CartProducts/CartProducts";
import styles from "./MyCart.module.scss";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";

function MyCart() {
    const { data = [], isError, isLoading } = useGetCartQuery(1);
    const cart = useSelector((state: RootState) => state.cart);

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
        <MainTemplate>
            <section className={styles.mycart}>
                <div className={styles.mycart__container}>
                    <h1 className={styles.mycart__title}>My cart</h1>
                    <div className={styles.mycart__infoContainer}>
                        <CartProducts />
                        <CartPrice
                            totalPrice={cart.total}
                            discountPrice={cart.discountedTotal}
                            totalQuantity={cart.totalQuantity}
                        />
                    </div>
                </div>
            </section>
        </MainTemplate>
    );
}

export default MyCart;
