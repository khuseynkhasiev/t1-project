import { ReactNode } from "react";
import Header from "../../Organisms/Header/Header";
import styles from "./LogInTemplate.module.scss";

type LogInTemplateProps = {
    children: ReactNode;
};

const LogInTemplate = ({ children }: LogInTemplateProps) => {
    return (
        <div className={styles.MainTemplate}>
            <Header />
            {children}
        </div>
    );
};

export default LogInTemplate;
