import { memo } from "react";
import ProductRating from "../ProductRating/ProductRating";
import styles from "./OneProductStates.module.scss";
interface IProps {
    rating: number;
    price: number;
    discountPercentage: number;
    stock: number;
    brand: string;
    category: string;
    description: string;
}
const OneProductStates = memo(({ states }: { states: IProps }) => {
    const {
        rating,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        description,
    } = states;
    return (
        <ul className={styles.oneProductStates}>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>Rating</p>
                <ProductRating rating={rating} />
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>Base price</p>
                <p className={styles.oneProductStates__itemValue}>{price}$</p>
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>
                    Discount percentage
                </p>
                <p className={styles.oneProductStates__itemValue}>
                    {discountPercentage}%
                </p>
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>
                    Discount price
                </p>
                <p className={styles.oneProductStates__itemValue}>
                    {(price * (discountPercentage / 100)).toFixed(2)}$
                </p>
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>Stock</p>
                <p className={styles.oneProductStates__itemValue}>{stock}</p>
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>Brand</p>
                <p className={styles.oneProductStates__itemValue}>{brand}</p>
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>Category</p>
                <p className={styles.oneProductStates__itemValue}>
                    {`${category[0].toLocaleUpperCase()}${category.slice(1)}`}
                </p>
            </li>
            <li className={styles.oneProductStates__stateItem}>
                <p className={styles.oneProductStates__itemKey}>Description</p>
                <p className={styles.oneProductStates__itemValue}>
                    {description}
                </p>
            </li>
        </ul>
    );
});

export default OneProductStates;
