import { memo } from "react";
import styles from "./CartPrice.module.scss";
interface IProps {
    totalPrice: number;
    discountPrice: number;
    totalQuantity: number;
}
const CartPrice = memo(
    ({ totalPrice, discountPrice, totalQuantity }: IProps) => {
        return (
            <ul className={styles.cartPrice}>
                <li className={styles.cartPrice__item}>
                    <p className={styles.cartPrice__countKey}>Total count:</p>
                    <p className={styles.cartPrice__countValue}>
                        {totalQuantity}
                    </p>
                </li>
                <li className={styles.cartPrice__item}>
                    <p className={styles.cartPrice__totalKey}>Total price:</p>
                    <p className={styles.cartPrice__totalValue}>
                        {totalPrice}$
                    </p>
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
);

export default CartPrice;
