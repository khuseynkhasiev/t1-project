import React from "react";
import Header from "../../Organisms/Header/Header";
import Footer from "../..//Organisms/Footer/Footer";
import styles from "./MainTemplate.module.scss";

type MainTemplateProps = {
    children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
    return (
        <div className={styles.mainTemplate}>
            <Header />
            <main className={styles.content}>{children}</main>
            <Footer />
        </div>
    );
};

export default MainTemplate;
