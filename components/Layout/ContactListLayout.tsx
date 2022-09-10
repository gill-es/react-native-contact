import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

const ContactListLayout = ({children}: {children: React.ReactNode}) => {
  return <Layout style={styles.container}>{children}</Layout>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default ContactListLayout;
