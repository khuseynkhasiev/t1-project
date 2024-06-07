import { IProduct } from "../../interfaces/data";
import Product from "../Product/Product";
import productImage from "../../assets/images/product__img.png";
import styles from "./Products.module.scss";

const productsData: IProduct[] = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 2,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 3,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 4,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 5,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 6,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 7,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 8,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
    {
        id: 9,
        title: "Essence Mascara Lash Princess",
        price: 110,
        img: productImage,
    },
];

function Products() {
    return (
        <ul className={styles.products}>
            {productsData.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </ul>
    );
}

export default Products;
