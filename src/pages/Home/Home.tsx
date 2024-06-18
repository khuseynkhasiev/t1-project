import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import Faq from "../../components/Faq/Faq";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";

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
        <main className={styles.home}>
            <Hero />
            <Catalog />
            <Faq />
        </main>
    );
}

export default Home;
