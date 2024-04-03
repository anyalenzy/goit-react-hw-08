import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.trim().toLowerCase()) ||
          number.toLowerCase().includes(filter.trim().toLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
