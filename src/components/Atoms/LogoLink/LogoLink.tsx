import { Link } from "react-router-dom";
import styles from "./LogoLink.module.scss";

function LogoLink() {
    return (
        <Link to="/" className={styles.logoLink}>
            Goods4you
        </Link>
    );
}

export default LogoLink;
