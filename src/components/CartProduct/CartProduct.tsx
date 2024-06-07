import styles from "./CartProduct.module.scss";
import productImg from "../../assets/images/cartProduct__img.png";
import CartCountButton from "../CartCountButton/CartCountButton";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/data";
import productImage from "../../assets/images/product__img.png";

// временно захоркожен
const product: IProduct = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 110,
    img: productImage,
};

function CartProduct() {
    return (
        <li className={styles.cartProduct}>
            <Link
                className={styles.cartProduct__link}
                to={`/one-product/${product.id}`}
                state={{ product }}
            >
                <img
                    className={styles.cartProduct__img}
                    src={productImg}
                    alt="Essence Mascara Lash Princess"
                />
                <div className={styles.cartProduct__info}>
                    <p className={styles.cartProduct__name}>
                        Essence Mascara Lash Princess
                    </p>
                    <p className={styles.cartProduct__price}>110 $ </p>
                </div>
            </Link>
            <CartCountButton page="" />
            <button className={styles.cartProduct__delete}>Delete</button>
        </li>
    );
}

export default CartProduct;
