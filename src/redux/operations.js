import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from 'redux/api';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts', async () => {
        try {
            const contacts = await api.fetchContacts();
            return contacts;
            } catch (error) {
                console.log(error.message);
                }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContacts', async ({ name, phone: number }) => {
        try {
            const contact = await api.addContact({ name, phone: number });
            return contact;
            } catch (error) {
                console.log(error.message);
                }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts', async id => {
        try {
            const contact = await api.deleteContact(id);
            return contact;
            } catch (error) {
                console.log(error.message);
                }
    }
);



