import { SetStateAction, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Catalog from "../../Organisms/Catalog/Catalog";
import Faq from "../../Organisms/Faq/Faq";
import Hero from "../../Organisms/Hero/Hero";
import styles from "./Home.module.scss";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { useGetCartQuery } from "../../../store/api/cartsApi";
import * as api from "../../../api/api";
import Loading from "../../Atoms/Loading/Loading";

interface HomeProps {
    setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

function Home({ setLoggedIn }: HomeProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<number | null>(null);

    const { data, isError } = useGetCartQuery(userId!, {
        skip: userId === null,
    });

    const getAuthorizedUser = () => {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
            api.getActiveUser(token)
                .then((user) => setUserId(user.id))
                .catch((error) => {
                    setLoggedIn(false);
                    localStorage.removeItem("token");
                    navigate("/login");
                    console.error(error);
                })
                .finally(() => setIsLoading(false));
        }
    };

    useEffect(() => {
        getAuthorizedUser();
    }, []);

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
                {isLoading ? (
                    <div className={styles.home__container}>
                        <Loading />
                    </div>
                ) : (
                    <>
                        <Hero />
                        <Catalog />
                        <Faq />
                    </>
                )}
                {isError && (
                    <div className={styles.home__container}>
                        <h1>Error loading</h1>
                    </div>
                )}
            </main>
        </MainTemplate>
    );
}

export default Home;
