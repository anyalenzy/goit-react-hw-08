import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorToast } from "../../helpers/toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      errorToast(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", {
        name: values.name,
        number: values.number,
      });
      return response.data;
    } catch (e) {
      errorToast(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      errorToast(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (values, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${values.id}`, {
        name: values.contact.name,
        number: values.contact.number,
      });
      return response.data;
    } catch (e) {
      errorToast(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
