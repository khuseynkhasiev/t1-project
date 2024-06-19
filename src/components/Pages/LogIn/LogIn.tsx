import LogInTemplate from "../../Templates/LogInTemplate/LogInTemplate";
import ButtonAction from "../../Atoms/ButtonAction/ButtonAction";
import styles from "./LogIn.module.scss";
import Input from "../../Atoms/Input/Input";
import { ChangeEvent, useCallback, useState } from "react";

function LogIn() {
    const [user, setUser] = useState({
        login: "",
        password: "",
    });

    const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }));
    }, []);

    return (
        <LogInTemplate>
            <div className={styles.LogIn}>
                <div className={styles.LogIn__container}>
                    <h1 className={styles.LogIn__title}>Login</h1>
                    <form action="" className={styles.LogIn__form}>
                        <Input
                            type="text"
                            placeholder="Login"
                            cls="Input_pdMedium"
                            name="login"
                            value={user.login}
                            handleInput={handleInput}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            cls="Input_pdMedium"
                            name="password"
                            value={user.password}
                            handleInput={handleInput}
                        />
                        <ButtonAction tag="button" text="Login" />
                    </form>
                </div>
            </div>
        </LogInTemplate>
    );
}

export default LogIn;
