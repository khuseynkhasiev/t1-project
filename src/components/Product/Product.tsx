import { IProduct } from "../../interfaces/data";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import CartCountButton from "../CartCountButton/CartCountButton";

function Product({ product }: { product: IProduct }) {
    const { img, price, title, id } = product;

    const addProductCart = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        event.preventDefault();
        console.log("click button");
    };

    return (
        <li className={styles.product}>
            <Link
                className={styles.product__link}
                to={`/one-product/${id}`}
                state={{ product }}
            >
                <div className={styles.product__imgWrap}>
                    <img
                        className={styles.product__img}
                        src={img}
                        alt={title}
                    />
                </div>
                <div className={styles.product__footer}>
                    <div className={styles.product__info}>
                        <h1 className={styles.product__name}>{title}</h1>
                        <p className={styles.product__price}>{price} $ </p>
                    </div>
                    {id === 2 ? (
                        <CartCountButton page="/" />
                    ) : (
                        <button
                            className={styles.product__btn}
                            onClick={addProductCart}
                        />
                    )}
                </div>
            </Link>
        </li>
    );
}

export default Product;
