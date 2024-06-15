import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./CartPrice.module.scss";
function CartPrice() {
    const cart = useSelector((state: RootState) => state.cart);
    const [totalPrice, setTotalPrice] = useState<number>();
    const [discountPrice, setDiscountPrice] = useState<number>();

    useEffect(() => {
        getTotalPrice();
    }, [cart]);

    const getTotalPrice = () => {
        let totalPrice = 0;
        let discountPrice = 0;
        cart.products.forEach((product) => {
            totalPrice += product.total;
            discountPrice += product.discountedTotal;
        });
        setTotalPrice(Number(totalPrice.toFixed(2)));
        setDiscountPrice(Number(discountPrice.toFixed(2)));
    };

    return (
        <ul className={styles.cartPrice}>
            <li className={styles.cartPrice__item}>
                <p className={styles.cartPrice__countKey}>Total count:</p>
                <p className={styles.cartPrice__countValue}>
                    {cart.totalQuantity}
                </p>
            </li>
            <li className={styles.cartPrice__item}>
                <p className={styles.cartPrice__totalKey}>Total price:</p>
                <p className={styles.cartPrice__totalValue}>{totalPrice}$</p>
            </li>
            <li className={styles.cartPrice__item}>
                <p className={styles.cartPrice__discountKey}>
                    Total price with discount:
                </p>
                <p className={styles.cartPrice__discountValue}>
                    {discountPrice}$
                </p>
            </li>
        </ul>
    );
}

export default CartPrice;
