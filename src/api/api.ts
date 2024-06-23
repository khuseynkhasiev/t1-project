import { IUser } from "../interfaces/data";

const BASE_URL = "https://dummyjson.com";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const logIn = ({
    login,
    password,
}: {
    login: string;
    password: string;
}): Promise<IUser> => {
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: login,
            password: password,
            expiresInMins: 30,
        }),
    }).then((res) => checkResponse(res));
};

const getActiveUser = (token: string) => {
    return fetch(`${BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => checkResponse(res));
};

const updateCart = (cart: any, id: number) => {
    return fetch(`${BASE_URL}/carts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            merge: false,
            products: cart,
        }),
    }).then((res) => checkResponse(res));
};

export { logIn, getActiveUser, updateCart };
