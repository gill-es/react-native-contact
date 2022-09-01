import React from 'react';
import {List} from '@ui-kitten/components';
import DefaultListItem, {Item} from './ListItem/DefaultListItem';

const DefaultList = ({
  data,
  onViewButtonPress,
}: {
  data: Array<Item>;
  onViewButtonPress?: () => void;
}) => {
  const renderItem = ({item}: {item: Item}) => {
    return (
      <DefaultListItem item={item} onViewButtonPress={onViewButtonPress} />
    );
  };

  return <List data={data} renderItem={renderItem} />;
};

export default DefaultList;
