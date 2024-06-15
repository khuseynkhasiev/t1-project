import { useLocation } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import LineWidth from "../../Atoms/LineWidth/LineWidth";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Header.module.scss";

const Header = memo(() => {
    const location = useLocation();
    const [isVisibleLine, setVisibleLine] = useState(true);

    useEffect(() => {
        setVisibleLine(() => location.pathname === "/");
    }, [location.pathname]);

    return (
        <header
            className={`${styles.header} ${
                isVisibleLine ? "" : styles.header_paddingBottom
            }`}
        >
            <div className={styles.header__container}>
                <Nav />
                {isVisibleLine && (
                    <LineWidth color="rgba(255, 255, 255, 0.5)" />
                )}
            </div>
        </header>
    );
});

export default Header;
