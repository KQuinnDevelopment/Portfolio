import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        const t = JSON.stringify(userToken.token);
        const u = JSON.stringify(userToken.name);
        sessionStorage.setItem('token', t);
        sessionStorage.setItem('user', u.replaceAll('"', ''));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}