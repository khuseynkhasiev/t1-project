import { memo } from "react";
import styles from "./ButtonAddProductCart.module.scss";

interface ButtonAddProductCartProps {
    addNewProductToCart: () => void;
}

const ButtonAddProductCart = memo(
    ({ addNewProductToCart }: ButtonAddProductCartProps) => {
        return (
            <button
                className={styles.ButtonAddProductCart}
                onClick={(e) => {
                    e.preventDefault();
                    addNewProductToCart();
                }}
                aria-label="Add to cart"
            >
                <svg
                    aria-hidden="true"
                    width="21.000000"
                    height="19.300293"
                    viewBox="0 0 20 18.3003"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs />
                    <path
                        id="Vector"
                        d="M20 6.53L16.6 6.53L13.03 0.31C12.85 0 12.47 -0.1 12.17 0.09C11.88 0.27 11.78 0.68 11.96 0.98L15.14 6.53L4.85 6.53L8.03 0.98C8.21 0.68 8.11 0.27 7.82 0.09C7.52 -0.1 7.14 0 6.96 0.31L3.39 6.53L0 6.53L0 7.84L1.35 7.84L2.94 16.7C3.11 17.62 3.88 18.3 4.78 18.3L15.21 18.3C16.11 18.3 16.88 17.62 17.05 16.7L18.64 7.84L20 7.84C20 7.84 20 6.53 20 6.53ZM15.82 16.46C15.77 16.76 15.51 16.99 15.21 16.99L4.78 16.99C4.48 16.99 4.22 16.76 4.17 16.45L2.62 7.84L17.37 7.84L15.82 16.46Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                    />
                </svg>
            </button>
        );
    }
);

export default ButtonAddProductCart;
