import React, {useEffect, useMemo} from 'react';
import ContactListLayout from '../../../components/Layout/ContactListLayout';
import DefaultList from '../../../components/List/DefaultList';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import Contacts from '../../../slices/contacts';
import mapContactToListItem from '../mappers';

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const listData = useMemo(() => {
    return mapContactToListItem(contacts.list);
  }, [contacts.list]);

  useEffect(() => {
    dispatch(Contacts.getContacts());
  });

  // const onViewButtonPress = (id: number) => {
  // }

  return (
    <ContactListLayout>
      <DefaultList data={listData} />
    </ContactListLayout>
  );
};

export default ContactList;
