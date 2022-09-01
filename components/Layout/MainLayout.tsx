import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return <Layout style={styles.container}>{children}</Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainLayout;
