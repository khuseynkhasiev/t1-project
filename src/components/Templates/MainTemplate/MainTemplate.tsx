import { ReactNode } from "react";
import Header from "../../Organisms/Header/Header";
import Footer from "../..//Organisms/Footer/Footer";
import styles from "./MainTemplate.module.scss";

type MainTemplateProps = {
    children: ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <div className={styles.MainTemplate}>
            <Header loggedIn={true} />
            {children}
            <Footer />
        </div>
    );
};

export default MainTemplate;
