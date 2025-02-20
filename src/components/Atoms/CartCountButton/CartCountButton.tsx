import { memo, useState } from "react";
import styles from "./CartCountButton.module.scss";

interface Props {
    quantity: number;
    id: number;
    stock?: number;
    incrementProductCart: (count: number) => void;
    decrementProductCart: (count: number) => void;
    deleteFullProductCart: (id: number) => void;
}
const CartCountButton = memo(
    ({
        quantity,
        stock,
        incrementProductCart,
        decrementProductCart,
        deleteFullProductCart,
        id,
    }: Props) => {
        const [count, setCount] = useState<number>(quantity);
        const handleStopPreventDefault = (
            event: React.MouseEvent<HTMLDivElement>
        ): void => {
            event.preventDefault();
        };

        const increment = () => {
            if (stock !== undefined) {
                if (count < stock) {
                    setCount((prev) => prev + 1);
                    incrementProductCart(count + 1);
                }
            } else {
                setCount((prev) => prev + 1);
                incrementProductCart(count + 1);
            }
        };

        const decrement = () => {
            if (count > 1) {
                setCount((prev) => prev - 1);
                decrementProductCart(count - 1);
            } else {
                deleteFullProductCart(id);
            }
        };
        return (
            <div
                className={styles.cartCountButton}
                onClick={handleStopPreventDefault}
            >
                <button
                    className={styles.cartCountButton__button}
                    aria-label="delete"
                    onClick={decrement}
                >
                    <svg
                        aria-hidden="true"
                        width="22"
                        height="3"
                        viewBox="0 0 22 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.4998 3L2.22705 3C1.39862 3 0.727051 2.32843 0.727051 1.5C0.727051 0.671573 1.39863 0 2.22705 0L20.4998 0C21.3282 0 21.9998 0.671573 21.9998 1.5C21.9998 2.32843 21.3282 3 20.4998 3Z"
                            fill="white"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    value={quantity}
                    className={styles.cartCountButton__count}
                    disabled
                />

                <button
                    className={styles.cartCountButton__button}
                    aria-label="add"
                    onClick={increment}
                >
                    <svg
                        aria-hidden="true"
                        width="23"
                        height="18"
                        viewBox="0 0 23 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.0911 10L1.81836 10C1.26607 10 0.818359 9.55228 0.818359 9C0.818359 8.44772 1.26608 8 1.81836 8L21.0911 8C21.6434 8 22.0911 8.44772 22.0911 9C22.0911 9.55228 21.6434 10 21.0911 10Z"
                            fill="white"
                        />
                        <path
                            d="M10.2729 16.8182L10.2729 1.18182C10.2729 0.529118 10.8021 0 11.4548 0C12.1075 0 12.6366 0.529118 12.6366 1.18182L12.6366 16.8182C12.6366 17.4709 12.1075 18 11.4548 18C10.8021 18 10.2729 17.4709 10.2729 16.8182Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        );
    }
);

export default CartCountButton;
