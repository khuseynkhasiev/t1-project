import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonAction.module.scss";

interface Props {
    tag: "link" | "button";
    link?: string;
    text: string;
    handleClickButton?: () => void;
}
const ButtonAction = memo(({ tag, link, text, handleClickButton }: Props) => {
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
            return (
                <button
                    className={styles.buttonAction}
                    onClick={handleClickButton}
                >
                    {text}
                </button>
            );
        default:
            return null;
    }
});

export default ButtonAction;
