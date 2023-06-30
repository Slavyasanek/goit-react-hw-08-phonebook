import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (filter === '') {
            return contacts;
        } else {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        }
    }
);