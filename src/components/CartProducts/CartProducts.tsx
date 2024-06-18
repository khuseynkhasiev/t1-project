import CartProduct from "../CartProduct/CartProduct";
import styles from "./CartProducts.module.scss";
function CartProducts() {
    return (
        <ul className={styles.cardProducts}>
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </ul>
    );
}

export default CartProducts;
