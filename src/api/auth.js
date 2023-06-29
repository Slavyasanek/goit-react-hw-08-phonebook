import { deleteToken, setToken } from "./instance";
import { instance } from "./instance";

export const signUp = async user => {
    const {data} = await instance.post('/users/signup', user);
    setToken(data.token);
    return data;
}

export const logIn = async user => {
    const {data} = await instance.post('/users/login', user);
    setToken(data.token);
    return data;
}

export const logOut = async () => {
    await instance.post('/users/logout');
    deleteToken();
}

export const refreshMe = async () => {
    const {data} = await instance.get('/users/current');
    return data;
}