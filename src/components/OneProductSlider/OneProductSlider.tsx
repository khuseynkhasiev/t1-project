import { useState, useEffect, memo } from "react";
import styles from "./OneProductSlider.module.scss";
import { IProduct } from "../../interfaces/data";

const OneProductSlider = memo(
    ({ product }: { product: IProduct | undefined }) => {
        const { title, images } = product!;

        const handleActiveImageProduct = (
            event: React.MouseEvent<HTMLImageElement>
        ) => {
            const target = event.target as HTMLImageElement;
            setActiveImageProduct(target.src);
        };

        const [activeImageProduct, setActiveImageProduct] = useState<string>();

        useEffect(() => {
            if (product && product.images && product.images.length > 0) {
                setActiveImageProduct(product.images[0]);
            }
        }, [product]);
        return (
            <div className={styles.oneProductSlider}>
                <img
                    className={styles.oneProductSlider__imgTitle}
                    src={activeImageProduct ? activeImageProduct : images[0]}
                    alt={title}
                    aria-label="Selected Image"
                />
                <div className={styles.oneProductSlider__imgsContainer}>
                    {product?.images?.map((src: string, i: number) => (
                        <img
                            onClick={handleActiveImageProduct}
                            key={i}
                            className={`${styles.oneProductSlider__imgMini} ${
                                activeImageProduct === src
                                    ? styles.oneProductSlider__imgMini_active
                                    : ""
                            }`}
                            src={src}
                            alt={title}
                        />
                    ))}
                </div>
            </div>
        );
    }
);

export default OneProductSlider;
