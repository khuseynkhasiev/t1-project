import { memo } from "react";
import styles from "./LineWidth.module.scss";

interface IProps {
    color: string;
}

const LineWidth = memo(({ color }: IProps) => {
    return (
        <div className={styles.lineWidth} style={{ backgroundColor: color }} />
    );
});

export default LineWidth;
