import { memo } from "react";
import styles from "./DeleteProductCart.module.scss";

const DeleteProductCart = memo(() => {
    return <button className={styles.deleteProductCart}>Delete</button>;
});

export default DeleteProductCart;
