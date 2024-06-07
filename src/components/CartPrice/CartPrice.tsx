import styles from "./CartPrice.module.scss";
function CartPrice() {
    return (
        <ul className={styles.cartPrice}>
            <li className={styles.cartPrice__item}>
                <p className={styles.cartPrice__countKey}>Total count:</p>
                <p className={styles.cartPrice__countValue}>3</p>
            </li>
            <li className={styles.cartPrice__item}>
                <p className={styles.cartPrice__totalKey}>Total price:</p>
                <p className={styles.cartPrice__totalValue}>700$</p>
            </li>
            <li className={styles.cartPrice__item}>
                <p className={styles.cartPrice__discountKey}>
                    Total price with discount:
                </p>
                <p className={styles.cartPrice__discountValue}>590$</p>
            </li>
        </ul>
    );
}

export default CartPrice;
