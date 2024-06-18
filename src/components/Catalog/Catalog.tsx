import ButtonAction from "../ButtonAction/ButtonAction";
import Products from "../Products/Products";
import Search from "../Search/Search";
import styles from "./Catalog.module.scss";

function Catalog() {
    return (
        <section className={styles.catalog} id="catalog-id">
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>Catalog</h2>
                <Search />
                <Products />
                <div className={styles.catalog__containerBtn}>
                    <ButtonAction tag="button" text="Show more" />
                </div>
            </div>
        </section>
    );
}

export default Catalog;
