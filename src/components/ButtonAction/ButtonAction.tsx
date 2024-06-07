import { Link } from "react-router-dom";
import styles from "./ButtonAction.module.scss";

interface Props {
    tag: string;
    link?: string;
    text: string;
}
function ButtonAction({ tag, link, text }: Props) {
    switch (tag) {
        case "link":
            if (link) {
                return (
                    <Link to={link} className={styles.buttonAction}>
                        {text}
                    </Link>
                );
            }
            break;
        case "button":
            return <button className={styles.buttonAction}>{text}</button>;
        default:
            return null;
    }
}

export default ButtonAction;
