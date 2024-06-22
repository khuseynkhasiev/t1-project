import { memo, useState } from "react";
import { ICartProduct } from "../../../interfaces/data";
import CartCountButton from "../../Atoms/CartCountButton/CartCountButton";
import DeleteProductCart from "../../Atoms/DeleteProductCart/DeleteProductCart";
import CartProductLink from "../../Atoms/CartProductLink/CartProductLink";
import styles from "./CartProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import Loading from "../../Atoms/Loading/Loading";
import * as api from "../../../api/api";
import { updateCart } from "../../../store/features/cartProductsSlice/cartProductsSlice";
import CartChangeError from "../../Atoms/CartChangeError/CartChangeError";
const CartProduct = memo(({ product }: { product: ICartProduct }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const [isLoadingQuantity, setIsLoadingQuantity] = useState(false);
    const [isErrorEditProductsCart, setIsErrorEditProductsCart] =
        useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const updateCartProducts = (newCart: ICartProduct[], id: number) => {
        setIsLoadingQuantity(true);
        api.updateCart(newCart, id)
            .then((data) => {
                dispatch(updateCart(data));
                console.log("data", data);
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

    return (
        <>
            {isErrorEditProductsCart && (
                <CartChangeError errorMessage={errorMessage} />
            )}
            <li className={styles.cartProduct}>
                {isLoadingQuantity ? (
                    <Loading />
                ) : (
                    <>
                        <CartProductLink product={product} />
                        <CartCountButton
                            quantity={product.quantity}
                            incrementProductCart={incrementProductCart}
                            decrementProductCart={decrementProductCart}
                            deleteFullProductCart={deleteFullProductCart}
                            id={product.id}
                        />
                        <DeleteProductCart
                            deleteFullProductCart={deleteFullProductCart}
                            id={product.id}
                        />
                    </>
                )}
            </li>
        </>
    );
});

export default CartProduct;
