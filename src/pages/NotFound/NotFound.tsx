import styles from "./NotFound.module.scss";

function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1 className={styles.notFound__text}>Not Found</h1>
        </div>
    );
}

export default NotFound;
