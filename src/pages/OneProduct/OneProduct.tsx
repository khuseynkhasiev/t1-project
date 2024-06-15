import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store";
import ButtonAction from "../../components/ButtonAction/ButtonAction";
import Loading from "../../components/Loading/Loading";
import styles from "./OneProduct.module.scss";
import OneProductStates from "../../components/OneProductState/OneProductStates";
import OneProductSlider from "../../components/OneProductSlider/OneProductSlider";

function OneProduct() {
    const { id } = useParams<{ id: string }>();
    const {
        data: product,
        isError,
        isLoading,
    } = useGetProductQuery(Number(id));

    if (isLoading) {
        return (
            <article className={styles.oneProduct}>
                <div className={styles.oneProduct__container}>
                    <Loading />
                </div>
            </article>
        );
    }

    if (isError) {
        console.error("Error loading");
        return (
            <article className={styles.oneProduct}>
                <div className={styles.oneProduct__container}>
                    <h1>Error loading</h1>
                </div>
            </article>
        );
    }

    const {
        sku,
        rating,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        description,
    } = product!;

    const productStates = {
        rating,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        description,
    };

    return (
        <article className={styles.oneProduct}>
            <div className={styles.oneProduct__container}>
                <p className={styles.oneProduct__title}>Product 5</p>
                <div className={styles.oneProduct__cardContainer}>
                    <OneProductSlider product={product} />
                    <div className={styles.oneProduct__info}>
                        <div className={styles.oneProduct__titleContainer}>
                            <h1 className={styles.oneProduct__name}>
                                {product?.title}
                            </h1>
                            <p className={styles.oneProduct__skuId}>
                                <span className={styles.oneProduct__skuId_gray}>
                                    SKU ID
                                </span>
                                {sku}
                            </p>
                        </div>
                        <OneProductStates states={productStates} />
                        <ButtonAction tag={"button"} text={"Add to cart"} />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default OneProduct;
