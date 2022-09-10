import React from 'react';
import {List} from '@ui-kitten/components';
import DefaultListItem, {Item} from './ListItem/DefaultListItem';
import {Contact} from '../../features/Contact/types/contact';

const DefaultList = ({
  data,
  onViewButtonPress,
  onItemSelect,
}: {
  data: Array<Item>;
  onViewButtonPress?: (id: number) => void;
  onItemSelect?: (contact: Contact) => void;
}) => {
  const renderItem = ({item}: {item: Item}) => {
    return (
      <DefaultListItem
        item={item}
        onViewButtonPress={onViewButtonPress}
        onItemSelect={onItemSelect}
      />
    );
  };

  return <List data={data} renderItem={renderItem} />;
};

export default DefaultList;
