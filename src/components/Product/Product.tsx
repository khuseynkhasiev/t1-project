import { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/data";
import { RootState } from "../../store";
import CartCountButton from "../CartCountButton/CartCountButton";
import styles from "./Product.module.scss";

const Product = memo(({ product }: { product: IProduct }) => {
    const cart = useSelector((state: RootState) => state.cart);
    const [productCart, setProductCart] = useState<{
        id: number;
        quantity: number;
    } | null>(null);

    const { images, price, title, id } = product;

    useEffect(() => {
        if (cart.products.length > 0) {
            cart.products.forEach((item) => {
                if (item.id === id) {
                    setProductCart({
                        id: item.id,
                        quantity: item.quantity,
                    });
                }
            });
        } else {
            setProductCart(null);
        }
    }, []);

    const addProductCart = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        event.preventDefault();
    };

    return (
        <li className={styles.product}>
            <Link className={styles.product__link} to={`/one-product/${id}`}>
                <div className={styles.product__imgWrap}>
                    <img
                        className={styles.product__img}
                        src={images[0]}
                        alt={title}
                    />
                </div>
                <div className={styles.product__footer}>
                    <div className={styles.product__info}>
                        <h1 className={styles.product__name}>{title}</h1>
                        <p className={styles.product__price}>{price} $ </p>
                    </div>
                    {id === productCart?.id ? (
                        <CartCountButton quantity={productCart.quantity} />
                    ) : (
                        <button
                            className={styles.product__btn}
                            onClick={addProductCart}
                            aria-label="Add in cart"
                        >
                            <svg
                                aria-hidden="true"
                                width="21.000000"
                                height="19.300293"
                                viewBox="0 0 20 18.3003"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs />
                                <path
                                    id="Vector"
                                    d="M20 6.53L16.6 6.53L13.03 0.31C12.85 0 12.47 -0.1 12.17 0.09C11.88 0.27 11.78 0.68 11.96 0.98L15.14 6.53L4.85 6.53L8.03 0.98C8.21 0.68 8.11 0.27 7.82 0.09C7.52 -0.1 7.14 0 6.96 0.31L3.39 6.53L0 6.53L0 7.84L1.35 7.84L2.94 16.7C3.11 17.62 3.88 18.3 4.78 18.3L15.21 18.3C16.11 18.3 16.88 17.62 17.05 16.7L18.64 7.84L20 7.84C20 7.84 20 6.53 20 6.53ZM15.82 16.46C15.77 16.76 15.51 16.99 15.21 16.99L4.78 16.99C4.48 16.99 4.22 16.76 4.17 16.45L2.62 7.84L17.37 7.84L15.82 16.46Z"
                                    fill="#FFFFFF"
                                    fillOpacity="1.000000"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </Link>
        </li>
    );
});

export default Product;
