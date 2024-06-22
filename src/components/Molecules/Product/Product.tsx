import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interfaces/data";
import CartCountButton from "../../Atoms/CartCountButton/CartCountButton";
import styles from "./Product.module.scss";
import ButtonAddProductCart from "../../Atoms/ButtonAddProductCart/ButtonAddProductCart";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Atoms/Loading/Loading";
import { updateCart } from "../../../store/features/cartProductsSlice/cartProductsSlice";
import * as api from "../../../api/api";
import CartChangeError from "../../Atoms/CartChangeError/CartChangeError";
const Product = memo(({ product }: { product: IProduct }) => {
    const dispatch = useDispatch();
    const cartProduct = useSelector((state: RootState) =>
        state.cart.products.find((item) => item.id === product.id)
    );
    const cart = useSelector((state: RootState) => state.cart);
    const [isLoadingQuantity, setIsLoadingQuantity] = useState(false);
    const [isErrorEditProductsCart, setIsErrorEditProductsCart] =
        useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const updateCartProducts = (newCart: any, id: number) => {
        setIsLoadingQuantity(true);
        api.updateCart(newCart, id)
            .then((data) => {
                dispatch(updateCart(data));
            })
            .catch((error) => {
                setErrorMessage("Error changing carts");
                setIsErrorEditProductsCart(true);
                setTimeout(() => {
                    setIsErrorEditProductsCart(false);
                    setErrorMessage("");
                }, 2000);
                console.error(error);
            })
            .finally(() => setIsLoadingQuantity(false));
    };

    const deleteFullProductCart = (id: number) => {
        const newCart = cart.products.filter((item) => {
            return item.id !== id;
        });

        updateCartProducts(newCart, cart.id);
    };

    const incrementProductCart = (count: number) => {
        const newCart = cart.products.map((item) => {
            return item.id === product.id ? { ...item, quantity: count } : item;
        });
        updateCartProducts(newCart, cart.id);
    };

    const decrementProductCart = (count: number) => {
        const newCart = cart.products.map((item) => {
            return item.id === product.id ? { ...item, quantity: count } : item;
        });
        updateCartProducts(newCart, cart.id);
    };

    const addNewProductToCart = () => {
        const newCart = [...cart.products, product];
        updateCartProducts(newCart, cart.id);
    };

    return (
        <>
            {isErrorEditProductsCart && (
                <CartChangeError errorMessage={errorMessage} />
            )}
            <li className={styles.product}>
                <Link
                    className={styles.product__link}
                    to={`/one-product/${product.id}`}
                >
                    <div className={styles.product__imgWrap}>
                        <img
                            className={styles.product__img}
                            src={product.images[0]}
                            alt={product.title}
                        />
                    </div>
                    <div className={styles.product__footer}>
                        <div className={styles.product__info}>
                            <h1 className={styles.product__name}>
                                {product.title}
                            </h1>
                            <p className={styles.product__price}>
                                {product.price} $
                            </p>
                        </div>
                        {isLoadingQuantity ? (
                            <Loading />
                        ) : cartProduct ? (
                            <CartCountButton
                                stock={product.stock}
                                id={product.id}
                                incrementProductCart={incrementProductCart}
                                decrementProductCart={decrementProductCart}
                                deleteFullProductCart={deleteFullProductCart}
                                quantity={cartProduct.quantity}
                            />
                        ) : (
                            <ButtonAddProductCart
                                addNewProductToCart={addNewProductToCart}
                            />
                        )}
                    </div>
                </Link>
            </li>
        </>
    );
});

export default Product;
