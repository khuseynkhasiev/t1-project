import NotFoundTemplate from "../../Templates/NotFoundTemplate/NotFoundTemplate";
import styles from "./NotFound.module.scss";

function NotFound() {
    return (
        <NotFoundTemplate>
            <div className={styles.notFound}>
                <h1 className={styles.notFound__text}>Not Found</h1>
            </div>
        </NotFoundTemplate>
    );
}

export default NotFound;
