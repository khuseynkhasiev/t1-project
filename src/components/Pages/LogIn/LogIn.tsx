import LogInTemplate from "../../Templates/LogInTemplate/LogInTemplate";
import ButtonAction from "../../Atoms/ButtonAction/ButtonAction";
import styles from "./LogIn.module.scss";
import Input from "../../Atoms/Input/Input";
import {
    ChangeEvent,
    FormEvent,
    SetStateAction,
    memo,
    useCallback,
    useState,
} from "react";
import * as api from "../../../api/api";
import { IUser } from "../../../interfaces/data";
import { useNavigate } from "react-router-dom";

interface LogInProps {
    setLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

const LogIn = memo(({ setLoggedIn }: LogInProps) => {
    const navigate = useNavigate();
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

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const loggedInUser: IUser = await api.logIn(user);
            localStorage.setItem("token", loggedInUser.token);
            setLoggedIn(true);
            navigate("/", { replace: true });
        } catch (error) {
            setLoggedIn(false);
            console.error("Failed to log in", error);
        }
    };

    return (
        <LogInTemplate>
            <div className={styles.LogIn}>
                <div className={styles.LogIn__container}>
                    <h1 className={styles.LogIn__title}>Login</h1>
                    <form
                        action=""
                        className={styles.LogIn__form}
                        onSubmit={(e) => handleSubmit(e)}
                    >
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
});

export default LogIn;
