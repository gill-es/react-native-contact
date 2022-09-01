import React, {useEffect} from 'react';
import {Text} from '@ui-kitten/components';
import MainLayout from '../../../components/Layout/MainLayout';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import Contacts from '../../../slices/contacts';

const ContactDetails = () => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector(state => state.contacts.item);

  useEffect(() => {
    dispatch(Contacts.getContact());
  });

  return (
    <MainLayout>
      <Text category="h1">Contact Details</Text>
    </MainLayout>
  );
};

export default ContactDetails;
