import { instance } from "./instance"

export const fetchContacts = async () => {
    const {data} = await instance.get('/contacts');
    return data;
}

export const addContact = async contact => {
    const {data} = await instance.post('/contacts', {...contact});
    return data;
}

export const deleteContact = async id => {
    const {data} = await instance.delete(`/contacts/${id}`);
    return data;
};
