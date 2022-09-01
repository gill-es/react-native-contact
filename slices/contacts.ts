import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ContactsAPI, {ContactDataParams} from '../features/Contact/api';
import {Contact} from '../features/Contact/types/contact';

type ContactState = {
  list: Array<Contact>;
  item: Contact;
  isLoading: boolean;
};

const initialState: ContactState = {
  list: [],
  item: {
    name: '',
    avatar: '',
    email: '',
    mobile_number: '',
    nationality: '',
    gender: '',
    date_of_birth: '',
  },
  isLoading: false,
};

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  const response = await ContactsAPI.getContacts();
  return response.data;
});

const getContact = createAsyncThunk(
  'contacts/getContact',
  async (id: number) => {
    const response = await ContactsAPI.getContact(id);
    return response.data;
  },
);

const createContact = createAsyncThunk(
  'contacts/createContact',
  async (data: ContactDataParams) => {
    const response = await ContactsAPI.createContact(data);
    return response.data;
  },
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({id, data}: {id: number; data: ContactDataParams}) => {
    const response = await ContactsAPI.updateContact(id, data);
    return response.data;
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: number) => {
    const response = await ContactsAPI.deleteContact(id);
    return response.data;
  },
);

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getContact.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });

    builder.addCase(createContact.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });

    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });

    builder.addCase(deleteContact.fulfilled, state => {
      state.item = initialState.item;
      state.isLoading = false;
    });
  },
});

export default {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
