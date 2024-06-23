import { useGetCartQuery } from "../../../store/api/cartsApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CartPrice from "../../Atoms/CartPrice/CartPrice";
import CartProducts from "../../Organisms/CartProducts/CartProducts";
import styles from "./MyCart.module.scss";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { useEffect, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../../api/api";

interface MyCartProps {
    setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

function MyCart({ setLoggedIn }: MyCartProps) {
    const cart = useSelector((state: RootState) => state.cart);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<number | null>(null);
    const [isDeleted] = useState(
        cart.isDeleted === undefined ? false : cart.isDeleted
    );

    const { isError } = useGetCartQuery(userId!, {
        skip: userId === null,
    });

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

    if (isLoading) {
        return (
            <section className={styles.mycart}>
                <div className={styles.mycart__container}>
                    <h1>Loading...</h1>
                </div>
            </section>
        );
    }
    if (isError) {
        console.error("Error loading");
        return (
            <section className={styles.mycart}>
                <div className={styles.mycart__container}>
                    <h1>Error loading</h1>
                </div>
            </section>
        );
    }

    return (
        <MainTemplate>
            <section className={styles.mycart}>
                <div className={styles.mycart__container}>
                    <h1 className={styles.mycart__title}>My cart</h1>
                    <div className={styles.mycart__infoContainer}>
                        {isDeleted ? (
                            <p>Cart empty</p>
                        ) : (
                            <>
                                <CartProducts />
                                <CartPrice
                                    totalPrice={cart.total}
                                    discountPrice={cart.discountedTotal}
                                    totalQuantity={cart.totalQuantity}
                                />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </MainTemplate>
    );
}

export default MyCart;
