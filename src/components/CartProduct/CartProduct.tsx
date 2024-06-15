import { memo } from "react";
import { Link } from "react-router-dom";
import { ICartProduct } from "../../interfaces/data";
import CartCountButton from "../CartCountButton/CartCountButton";
import styles from "./CartProduct.module.scss";

const CartProduct = memo(({ product }: { product: ICartProduct }) => {
    const { price, quantity, thumbnail, title } = product;

    return (
        <li className={styles.cartProduct}>
            <Link
                className={styles.cartProduct__link}
                to={`/one-product/${product.id}`}
                state={{ product }}
            >
                <img
                    className={styles.cartProduct__img}
                    src={thumbnail}
                    alt={title}
                />
                <div className={styles.cartProduct__info}>
                    <h2 className={styles.cartProduct__name}>{title}</h2>
                    <p className={styles.cartProduct__price}>
                        {(price * quantity).toFixed(2)} $
                    </p>
                </div>
            </Link>
            <CartCountButton quantity={quantity} />
            <button className={styles.cartProduct__delete}>Delete</button>
        </li>
    );
});

export default CartProduct;
