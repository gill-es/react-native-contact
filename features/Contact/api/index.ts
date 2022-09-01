import Axios, {AxiosResponse} from 'axios';
import {REACT_APP_BASE_API_URL} from '@env';
import {Contact} from '../types/contact';

export type ContactDataParams = {} & Contact;

const axios = Axios.create({
  baseURL: REACT_APP_BASE_API_URL,
});

const getContacts = (): Promise<AxiosResponse> => {
  return axios.get('/contacts');
};

const getContact = (id: number): Promise<AxiosResponse> => {
  return axios.get(`/contacts/${id}`);
};

const createContact = (params: ContactDataParams): Promise<AxiosResponse> => {
  return axios.post('/contacts', {
    requestId: '$datatype.uuid',
    items: '$mockData',
    count: '$count',
    ...params,
  });
};

const updateContact = (
  id: number,
  params: ContactDataParams,
): Promise<AxiosResponse> => {
  return axios.put(`/contacts/${id}`, {
    requestId: '$datatype.uuid',
    items: '$mockData',
    count: '$count',
    ...params,
  });
};

const deleteContact = (id: number): Promise<AxiosResponse> => {
  return axios.delete(`/contacts/${id}`);
};

export default {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
