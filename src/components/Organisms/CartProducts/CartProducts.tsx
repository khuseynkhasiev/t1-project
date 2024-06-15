import { ICartProduct } from "../../../interfaces/data";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CartProduct from "../../Molecules/CartProduct/CartProduct";
import styles from "./CartProducts.module.scss";

function CartProducts() {
    const cart = useSelector((state: RootState) => state.cart);

    return (
        <ul className={styles.cardProducts}>
            {cart.products.map((product: ICartProduct) => (
                <CartProduct product={product} key={product.id} />
            ))}
        </ul>
    );
}

export default CartProducts;
