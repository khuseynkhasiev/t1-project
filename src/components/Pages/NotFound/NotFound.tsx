import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import styles from "./NotFound.module.scss";

function NotFound() {
    return (
        <MainTemplate>
            <div className={styles.notFound}>
                <h1 className={styles.notFound__text}>Not Found</h1>
            </div>
        </MainTemplate>
    );
}

export default NotFound;
