import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ContactListLayout from '../../../components/Layout/ContactListLayout';
import DefaultList from '../../../components/List/DefaultList';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {RootStackParamList} from '../../../navigation/MainStackNavigation';
import Contacts from '../../../slices/contacts';
import mapContactToListItem from '../mappers';
import ContactSummary from './ContactSummary';
import {Contact} from '../types/contact';

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

const ContactList = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const [selectedContact, setSelectedContact] = useState<null | Contact>(null);

  const listData = useMemo(() => {
    return mapContactToListItem(contacts.list);
  }, [contacts.list]);

  useEffect(() => {
    dispatch(Contacts.getContacts({limit: 25}));
  });

  const onViewButtonPress = (id: number) => {
    navigation.navigate('Details', {
      id,
    });
  };

  const onItemSelect = (data: Contact) => {
    setSelectedContact(data);
  };

  return (
    <ContactListLayout>
      {selectedContact && (
        <View style={styles.summary}>
          <ContactSummary data={selectedContact} />
        </View>
      )}
      <View style={styles.list}>
        <DefaultList
          data={listData}
          onViewButtonPress={onViewButtonPress}
          onItemSelect={onItemSelect}
        />
      </View>
    </ContactListLayout>
  );
};

const styles = StyleSheet.create({
  summary: {
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flexGrow: 1,
  },
});

export default ContactList;
