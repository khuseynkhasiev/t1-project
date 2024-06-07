import { useState } from "react";
import styles from "./CartCountButton.module.scss";

interface Props {
    page: string;
}
function CartCountButton({ page }: Props) {
    const [count, setCount] = useState(1);
    const handleStopPreventDefault = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        event.preventDefault();
    };

    const incrementCount = (): void => {
        setCount((prev) => prev + 1);
    };

    const decrementCount = (): void => {
        setCount((prev) => {
            if (prev === 1) {
                return prev;
            }
            return prev - 1;
        });
    };

    switch (page) {
        case "/":
            return (
                <div
                    className={styles.cartCountButtonHome}
                    onClick={handleStopPreventDefault}
                >
                    <button
                        className={styles.cartCountButtonHome__button}
                        onClick={decrementCount}
                    />
                    <p className={styles.cartCountButtonHome__count}>{count}</p>
                    <button
                        className={styles.cartCountButtonHome__button}
                        onClick={incrementCount}
                    />
                </div>
            );
        default:
            return (
                <div
                    className={styles.cartCountButton}
                    onClick={handleStopPreventDefault}
                >
                    <button
                        className={styles.cartCountButton__button}
                        onClick={decrementCount}
                    />
                    <p className={styles.cartCountButton__count}>{count}</p>
                    <button
                        className={styles.cartCountButton__button}
                        onClick={incrementCount}
                    />
                </div>
            );
    }
}

export default CartCountButton;
