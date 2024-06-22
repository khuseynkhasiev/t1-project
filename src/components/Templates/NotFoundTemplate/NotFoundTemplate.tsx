import { ReactNode } from "react";
import styles from "./NotFoundTemplate.module.scss";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";

interface NotFoundTemplateProps {
    children: ReactNode;
}

const NotFoundTemplate = ({ children }: NotFoundTemplateProps) => {
    return (
        <div className={styles.NotFoundTemplate}>
            <Header loggedIn={true} />
            {children}
            <Footer />
        </div>
    );
};

export default NotFoundTemplate;
