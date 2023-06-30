import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

export const setToken = token => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const deleteToken = () => {
    delete instance.defaults.headers.common['Authorization'];
}