import { Navigate } from "react-router-dom";
import { ComponentType } from "react";

interface ProtectedRouteProps {
    loggedIn: boolean;
    checkingToken: boolean;
    component: ComponentType<any>;
    [key: string]: any;
}

const ProtectedRoute = ({
    loggedIn,
    checkingToken,
    component: Component,
    ...rest
}: ProtectedRouteProps) => {
    if (checkingToken) {
        return <div>Loading...</div>;
    }

    return loggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
