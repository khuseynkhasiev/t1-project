import styles from "./OneProduct.module.scss";
// import { useLocation } from "react-router-dom";
// import { IProduct } from "../../interfaces/data";

import imageTitle from "../../assets/images/oneProduct__img.png";
import imageMini from "../../assets/images/oneProduct__imgMini.png";
import ButtonAction from "../../components/ButtonAction/ButtonAction";

function OneProduct() {
    // буду получать продукт
    // const location = useLocation();
    // const { product } = location.state as { product: IProduct };

    return (
        <article className={styles.oneProduct}>
            <div className={styles.oneProduct__container}>
                <p className={styles.oneProduct__title}>Product 5</p>
                <div className={styles.oneProduct__cardContainer}>
                    <div className={styles.oneProduct__slider}>
                        <img
                            className={styles.oneProduct__imgTitle}
                            src={imageTitle}
                            alt="Puma Force 1 Shadow"
                        />
                        <div className={styles.oneProduct__imgsContainer}>
                            {new Array(6).fill("").map((el, i) => (
                                <img
                                    key={i}
                                    className={styles.oneProduct__imgMini}
                                    src={imageMini}
                                    alt="Puma Force 1 Shadow"
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.oneProduct__info}>
                        <div className={styles.oneProduct__titleContainer}>
                            <h1 className={styles.oneProduct__name}>
                                Puma Force 1 Shadow
                            </h1>
                            <p className={styles.oneProduct__skuId}>
                                <span className={styles.oneProduct__skuId_gray}>
                                    SKU ID
                                </span>
                                0005
                            </p>
                        </div>
                        <ul className={styles.oneProduct__state}>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Rating
                                </p>
                                <svg
                                    className={styles.oneProduct__ratingIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="116"
                                    height="20"
                                    viewBox="0 0 116 20"
                                    fill="none"
                                >
                                    <path
                                        d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z"
                                        fill="#F14F4F"
                                    />
                                    <path
                                        d="M33.0489 2.92705C33.3483 2.00574 34.6517 2.00574 34.9511 2.92705L36.0206 6.21885C36.1545 6.63087 36.5385 6.90983 36.9717 6.90983H40.4329C41.4016 6.90983 41.8044 8.14945 41.0207 8.71885L38.2205 10.7533C37.87 11.0079 37.7234 11.4593 37.8572 11.8713L38.9268 15.1631C39.2261 16.0844 38.1717 16.8506 37.388 16.2812L34.5878 14.2467C34.2373 13.9921 33.7627 13.9921 33.4122 14.2467L30.612 16.2812C29.8283 16.8506 28.7739 16.0844 29.0732 15.1631L30.1428 11.8713C30.2766 11.4593 30.13 11.0079 29.7795 10.7533L26.9793 8.71885C26.1956 8.14945 26.5984 6.90983 27.5671 6.90983H31.0283C31.4615 6.90983 31.8455 6.63087 31.9794 6.21885L33.0489 2.92705Z"
                                        fill="#F14F4F"
                                    />
                                    <path
                                        d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.0206 6.21885C84.1545 6.63087 84.5385 6.90983 84.9717 6.90983H88.4329C89.4016 6.90983 89.8044 8.14945 89.0207 8.71885L86.2205 10.7533C85.87 11.0079 85.7234 11.4593 85.8572 11.8713L86.9268 15.1631C87.2261 16.0844 86.1717 16.8506 85.388 16.2812L82.5878 14.2467C82.2373 13.9921 81.7627 13.9921 81.4122 14.2467L78.612 16.2812C77.8283 16.8506 76.7739 16.0844 77.0732 15.1631L78.1428 11.8713C78.2766 11.4593 78.13 11.0079 77.7795 10.7533L74.9793 8.71885C74.1956 8.14945 74.5984 6.90983 75.5671 6.90983H79.0283C79.4615 6.90983 79.8455 6.63087 79.9794 6.21885L81.0489 2.92705Z"
                                        fill="#F14F4F"
                                    />
                                    <path
                                        d="M57.0489 2.92705C57.3483 2.00574 58.6517 2.00574 58.9511 2.92705L60.0206 6.21885C60.1545 6.63087 60.5385 6.90983 60.9717 6.90983H64.4329C65.4016 6.90983 65.8044 8.14945 65.0207 8.71885L62.2205 10.7533C61.87 11.0079 61.7234 11.4593 61.8572 11.8713L62.9268 15.1631C63.2261 16.0844 62.1717 16.8506 61.388 16.2812L58.5878 14.2467C58.2373 13.9921 57.7627 13.9921 57.4122 14.2467L54.612 16.2812C53.8283 16.8506 52.7739 16.0844 53.0732 15.1631L54.1428 11.8713C54.2766 11.4593 54.13 11.0079 53.7795 10.7533L50.9793 8.71885C50.1956 8.14945 50.5984 6.90983 51.5671 6.90983H55.0283C55.4615 6.90983 55.8455 6.63087 55.9794 6.21885L57.0489 2.92705Z"
                                        fill="#F14F4F"
                                    />
                                    <path
                                        d="M105.049 2.92705C105.348 2.00574 106.652 2.00574 106.951 2.92705L108.021 6.21885C108.155 6.63087 108.538 6.90983 108.972 6.90983H112.433C113.402 6.90983 113.804 8.14945 113.021 8.71885L110.22 10.7533C109.87 11.0079 109.723 11.4593 109.857 11.8713L110.927 15.1631C111.226 16.0844 110.172 16.8506 109.388 16.2812L106.588 14.2467C106.237 13.9921 105.763 13.9921 105.412 14.2467L102.612 16.2812C101.828 16.8506 100.774 16.0844 101.073 15.1631L102.143 11.8713C102.277 11.4593 102.13 11.0079 101.78 10.7533L98.9793 8.71885C98.1956 8.14945 98.5984 6.90983 99.5671 6.90983H103.028C103.462 6.90983 103.845 6.63087 103.979 6.21885L105.049 2.92705Z"
                                        fill="#F14F4F"
                                    />
                                </svg>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Base price
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    500$
                                </p>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Discount percentage
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    10%
                                </p>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Discount price
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    450$
                                </p>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Stock
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    13
                                </p>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Brand
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    Puma
                                </p>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Category
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    Smartphones
                                </p>
                            </li>
                            <li className={styles.oneProduct__stateItem}>
                                <p className={styles.oneProduct__itemKey}>
                                    Description
                                </p>
                                <p className={styles.oneProduct__itemValue}>
                                    An apple mobile which is nothing like apple
                                </p>
                            </li>
                        </ul>
                        <ButtonAction tag={"button"} text={"Add to cart"} />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default OneProduct;
