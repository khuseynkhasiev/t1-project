import ButtonAction from "../ButtonAction/ButtonAction";
import styles from "./Hero.module.scss";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <h1 className={styles.hero__title}>Goods4you</h1>
                <div className={styles.hero__info}>
                    <p className={styles.hero__text}>
                        Any products from famous brands with worldwide delivery
                    </p>
                    <p className={styles.hero__description}>
                        We sell smartphones, laptops, clothes, shoes
                        <br /> and many other products at low prices
                    </p>
                    <ButtonAction
                        tag="link"
                        link="#catalog-id"
                        text="Go to shopping"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
