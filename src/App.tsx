import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import MyCart from "./components/Pages/MyCart/MyCart";
import NotFound from "./components/Pages/NotFound/NotFound";
import OneProduct from "./components/Pages/OneProduct/OneProduct";
import LogIn from "./components/Pages/LogIn/LogIn";
import { useEffect, useState } from "react";
import ProtectedRoute from "./HOCs/ProtectedRoute/ProtectedRoute";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingToken, setCheckingToken] = useState(true);

    const checkToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setCheckingToken(false);
    };

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        component={Home}
                        setLoggedIn={setLoggedIn}
                        checkingToken={checkingToken}
                    />
                }
            />
            <Route
                path="/one-product/:id"
                element={
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        component={OneProduct}
                        checkingToken={checkingToken}
                        setLoggedIn={setLoggedIn}
                    />
                }
            />
            <Route
                path="/my-cart"
                element={
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        component={MyCart}
                        checkingToken={checkingToken}
                        setLoggedIn={setLoggedIn}
                    />
                }
            />
            <Route
                path="/login"
                element={
                    loggedIn ? (
                        <Navigate to="/" />
                    ) : (
                        <LogIn setLoggedIn={setLoggedIn} />
                    )
                }
            />
            <Route
                path="*"
                element={loggedIn ? <NotFound /> : <Navigate to="/login" />}
            />
        </Routes>
    );
}

export default App;
