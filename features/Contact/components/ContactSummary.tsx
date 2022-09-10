import React from 'react';
import {Avatar, Text} from '@ui-kitten/components';
import {ImageURISource, StyleSheet, View} from 'react-native';
import {Contact} from '../types/contact';

const ContactSummary = ({data}: {data: Contact}) => {
  return (
    <View style={styles.header}>
      <View>
        {data.avatar && (
          <Avatar size="large" source={{uri: data.avatar} as ImageURISource} />
        )}
      </View>
      <View style={styles.name}>
        <Text category="h5">{data.name}</Text>
        <Text category="c2" appearance="hint">
          {data.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  name: {
    marginLeft: 20,
  },
});

export default ContactSummary;
