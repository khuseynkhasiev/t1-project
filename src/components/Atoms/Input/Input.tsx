import { memo } from "react";
import styles from "./Input.module.scss";

interface InputProps {
    type: string;
    cls: string;
    placeholder: string;
    name: string;
    value: string;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = memo(
    ({ type, cls, placeholder, name, value, handleInput }: InputProps) => {
        const inputCls = `${styles.Input} ${styles[cls]}`;

        return (
            <input
                type={type}
                className={inputCls}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleInput}
            />
        );
    }
);

export default Input;
