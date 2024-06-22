import { memo } from "react";
import styles from "./DeleteProductCart.module.scss";

interface DeleteProductCartProps {
    deleteFullProductCart: (id: number) => void;
    id: number;
}

const DeleteProductCart = memo(
    ({ deleteFullProductCart, id }: DeleteProductCartProps) => {
        return (
            <button
                onClick={() => deleteFullProductCart(id)}
                className={styles.deleteProductCart}
            >
                Delete
            </button>
        );
    }
);

export default DeleteProductCart;
