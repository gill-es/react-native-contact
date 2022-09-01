import React, {useEffect, useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ContactListLayout from '../../../components/Layout/ContactListLayout';
import DefaultList from '../../../components/List/DefaultList';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {RootStackParamList} from '../../../navigation/MainStackNavigation';
import Contacts from '../../../slices/contacts';
import mapContactToListItem from '../mappers';

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

const ContactList = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const listData = useMemo(() => {
    return mapContactToListItem(contacts.list);
  }, [contacts.list]);

  useEffect(() => {
    dispatch(Contacts.getContacts());
  });

  const onViewButtonPress = (id: number) => {
    navigation.navigate('Details', {
      id,
    });
  };

  return (
    <ContactListLayout>
      <DefaultList data={listData} onViewButtonPress={onViewButtonPress} />
    </ContactListLayout>
  );
};

export default ContactList;
