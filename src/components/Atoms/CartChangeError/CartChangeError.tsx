import styles from "./CartChangeError.module.scss";

const CartChangeError = ({ errorMessage }: { errorMessage: string }) => {
    return (
        <div className={styles.CartChangeError}>
            <p className={styles.CartChangeError__message}>{errorMessage}</p>
        </div>
    );
};

export default CartChangeError;
