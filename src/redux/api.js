import axios from 'axios';

axios.defaults.baseURL = 'https://6394d46786829c49e8283691.mockapi.io/contacts';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact({ name, phone: number }) {
    const { data } = await axios.post(`/contacts/`, {
        name,
        phone: number,
    });
    return data;
};

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
};

