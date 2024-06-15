import { memo } from "react";
import { ICartProduct } from "../../../interfaces/data";
import { Link } from "react-router-dom";
import styles from "./CartProductLink.module.scss";

type ICartProductLink = Omit<
    ICartProduct,
    "discountPercentage" | "discountedTotal" | "total"
>;

const CartProductLink = memo(({ product }: { product: ICartProductLink }) => {
    const { price, quantity, thumbnail, title, id } = product;

    return (
        <Link className={styles.cartProductLink} to={`/one-product/${id}`}>
            <img
                className={styles.cartProductLink__img}
                src={thumbnail}
                alt={title}
            />
            <div className={styles.cartProductLink__info}>
                <h2 className={styles.cartProductLink__name}>{title}</h2>
                <p className={styles.cartProductLink__price}>
                    {(price * quantity).toFixed(2)} $
                </p>
            </div>
        </Link>
    );
});

export default CartProductLink;
