import { memo } from "react";
import { ICartProduct } from "../../../interfaces/data";
import CartCountButton from "../../Atoms/CartCountButton/CartCountButton";
import DeleteProductCart from "../../Atoms/DeleteProductCart/DeleteProductCart";
import CartProductLink from "../../Atoms/CartProductLink/CartProductLink";
import styles from "./CartProduct.module.scss";

const CartProduct = memo(({ product }: { product: ICartProduct }) => {
    return (
        <li className={styles.cartProduct}>
            <CartProductLink product={product} />
            <CartCountButton quantity={product.quantity} />
            <DeleteProductCart />
        </li>
    );
});

export default CartProduct;
