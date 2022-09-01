import React from 'react';
import {ListItem, Avatar, Divider, Button} from '@ui-kitten/components';
import {ImageURISource, View} from 'react-native';

export type Item = {
  id: string | number;
  title: string;
  description?: string;
  avatar?: string;
};

const DefaultListItem = ({
  item,
  onViewButtonPress,
}: {
  item: Item;
  onViewButtonPress?: () => void;
}) => {
  const ItemImage = () => {
    return <Avatar source={{uri: item.avatar} as ImageURISource} />;
  };

  const ItemButtons = () => (
    <Button size="tiny" onPress={onViewButtonPress}>
      View
    </Button>
  );

  return (
    <View>
      <Divider />
      <ListItem
        title={`${item.id} ${item.title}`}
        description={item.description}
        accessoryLeft={ItemImage}
        accessoryRight={ItemButtons}
      />
      <Divider />
    </View>
  );
};

export default DefaultListItem;
