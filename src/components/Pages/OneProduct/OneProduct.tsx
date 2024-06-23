import { useNavigate, useParams } from "react-router-dom";
import { RootState, useGetProductQuery } from "../../../store";
import ButtonAction from "../../Atoms/ButtonAction/ButtonAction";
import Loading from "../../Atoms/Loading/Loading";
import styles from "./OneProduct.module.scss";
import OneProductStates from "../../Molecules/OneProductState/OneProductStates";
import OneProductSlider from "../../Molecules/OneProductSlider/OneProductSlider";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, SetStateAction } from "react";
import * as api from "../../../api/api";
import { updateCart } from "../../../store/features/cartProductsSlice/cartProductsSlice";
import CartCountButton from "../../Atoms/CartCountButton/CartCountButton";
import { useGetCartQuery } from "../../../store/api/cartsApi";
import CartChangeError from "../../Atoms/CartChangeError/CartChangeError";

interface OneProductProps {
    setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

function OneProduct({ setLoggedIn }: OneProductProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const {
        data: product,
        isError,
        isLoading: isLoadingProduct,
    } = useGetProductQuery(Number(id));
    const cart = useSelector((state: RootState) => state.cart);
    const cartProduct = useSelector((state: RootState) =>
        state.cart.products.find((item) => item.id === Number(id))
    );
    const [userId, setUserId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const {} = useGetCartQuery(userId!, {
        skip: userId === null,
    });
    const [isLoadingQuantity, setIsLoadingQuantity] = useState(false);
    const [isErrorEditProductsCart, setIsErrorEditProductsCart] =
        useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getAuthorizedUser = () => {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
            api.getActiveUser(token)
                .then((user) => setUserId(user.id))
                .catch((error) => {
                    setLoggedIn(false);
                    localStorage.removeItem("token");
                    navigate("/login");
                    console.error(error);
                })
                .finally(() => setIsLoading(false));
        }
    };
    useEffect(() => {
        getAuthorizedUser();
    }, []);

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

    if (isLoadingProduct) {
        return (
            <MainTemplate>
                <article className={styles.oneProduct}>
                    <div className={styles.oneProduct__container}>
                        <Loading />
                    </div>
                </article>
            </MainTemplate>
        );
    }
    if (isError) {
        return (
            <MainTemplate>
                <article className={styles.oneProduct}>
                    <div className={styles.oneProduct__container}>
                        <h1>Error loading</h1>
                    </div>
                </article>
            </MainTemplate>
        );
    }

    if (!product) {
        return (
            <MainTemplate>
                <article className={styles.oneProduct}>
                    <div className={styles.oneProduct__container}>
                        <h1>Product not found</h1>
                    </div>
                </article>
            </MainTemplate>
        );
    }

    const {
        sku,
        rating,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        description,
    } = product;

    const productStates = {
        rating,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        description,
    };

    const deleteFullProductCart = (id: number) => {
        const newCart = cart.products.filter((item) => item.id !== id);
        updateCartProducts(newCart, cart.id);
    };

    const incrementProductCart = (count: number) => {
        const newCart = cart.products.map((item) =>
            item.id === product?.id ? { ...item, quantity: count } : item
        );
        updateCartProducts(newCart, cart.id);
    };

    const decrementProductCart = (count: number) => {
        const newCart = cart.products.map((item) =>
            item.id === product?.id ? { ...item, quantity: count } : item
        );
        updateCartProducts(newCart, cart.id);
    };

    const addNewProductToCart = () => {
        const newCart = [...cart.products, product];
        updateCartProducts(newCart, cart.id);
    };
    return (
        <MainTemplate>
            {isErrorEditProductsCart && (
                <CartChangeError errorMessage={errorMessage} />
            )}
            <article className={styles.oneProduct}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className={styles.oneProduct__container}>
                        <p className={styles.oneProduct__title}>Product 5</p>
                        <div className={styles.oneProduct__cardContainer}>
                            <OneProductSlider product={product} />
                            <div className={styles.oneProduct__info}>
                                <div
                                    className={
                                        styles.oneProduct__titleContainer
                                    }
                                >
                                    <h1 className={styles.oneProduct__name}>
                                        {product.title}
                                    </h1>
                                    <p className={styles.oneProduct__skuId}>
                                        <span
                                            className={
                                                styles.oneProduct__skuId_gray
                                            }
                                        >
                                            SKU ID
                                        </span>
                                        {sku}
                                    </p>
                                </div>
                                <OneProductStates states={productStates} />
                                {isLoadingQuantity ? (
                                    <Loading />
                                ) : cartProduct ? (
                                    <CartCountButton
                                        quantity={cartProduct.quantity}
                                        stock={stock}
                                        id={cartProduct.id}
                                        incrementProductCart={
                                            incrementProductCart
                                        }
                                        decrementProductCart={
                                            decrementProductCart
                                        }
                                        deleteFullProductCart={
                                            deleteFullProductCart
                                        }
                                    />
                                ) : (
                                    <ButtonAction
                                        tag={"button"}
                                        text={"Add to cart"}
                                        handleClickButton={addNewProductToCart}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </MainTemplate>
    );
}

export default OneProduct;
