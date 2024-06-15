import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Catalog from "../../Organisms/Catalog/Catalog";
import Faq from "../../Organisms/Faq/Faq";
import Hero from "../../Organisms/Hero/Hero";
import styles from "./Home.module.scss";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";

function Home() {
    const location = useLocation();

    const scrollToHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );
        }
    };

    useEffect(() => {
        scrollToHash();
    }, [location]);

    return (
        <MainTemplate>
            <main className={styles.home}>
                <Hero />
                <Catalog />
                <Faq />
            </main>
        </MainTemplate>
    );
}

export default Home;
