import Products from "../Products/Products";
import styles from "./Catalog.module.scss";

function Catalog() {
    return (
        <section className={styles.catalog} id="catalog-id">
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>Catalog</h2>
                <Products />
            </div>
        </section>
    );
}

export default Catalog;
