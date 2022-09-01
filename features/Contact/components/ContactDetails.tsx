import React, {useEffect, useMemo} from 'react';
import {Avatar, Card, Divider, Icon, Layout, Text} from '@ui-kitten/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainLayout from '../../../components/Layout/MainLayout';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import Contacts from '../../../slices/contacts';
import {RootStackParamList} from '../../../navigation/MainStackNavigation';
import {ImageURISource, StyleSheet, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const ContactDetails = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector(state => state.contacts.item);

  const {id} = route.params;

  useEffect(() => {
    dispatch(Contacts.getContact(id));
  }, [id]);

  const dateOfBirth = useMemo(() => {
    const bday = new Date(contact.date_of_birth);
    return bday.toLocaleDateString('en-US');
  }, [contact.date_of_birth]);

  return (
    <MainLayout>
      <Card style={styles.card}>
        <View style={styles.header}>
          <View>
            {contact.avatar && (
              <Avatar source={{uri: contact.avatar} as ImageURISource} />
            )}
          </View>
          <View style={styles.name}>
            <Text category="h5">{contact.name}</Text>
            <Text category="c2" appearance="hint">
              {contact.email}
            </Text>
          </View>
        </View>
        <Divider />
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <Icon style={styles.icon} fill="#8F9BB3" name="phone" />
            </View>
            <Text>{contact.mobile_number}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <Icon style={styles.icon} fill="#8F9BB3" name="gift" />
            </View>
            <Text>{dateOfBirth}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <Icon style={styles.icon} fill="#8F9BB3" name="flag" />
            </View>
            <Text>{contact.nationality}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <Icon style={styles.icon} fill="#8F9BB3" name="person" />
            </View>
            <Text>{contact.gender}</Text>
          </View>
        </View>
      </Card>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    display: 'flex',
    flexBasis: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 5,
  },
});

export default ContactDetails;
