import React, {useCallback} from 'react';
import {ListItem, Avatar, Button, ButtonGroup} from '@ui-kitten/components';
import {ImageURISource, StyleSheet} from 'react-native';
import {Contact} from '../../../features/Contact/types/contact';

export type Item = {
  id: string | number;
  title: string;
  description?: string;
  avatar?: string;
};

const DefaultListItem = ({
  item,
  onViewButtonPress,
  onItemSelect,
}: {
  item: Item;
  onViewButtonPress?: (id: number) => void;
  onItemSelect?: (contact: Contact) => void;
}) => {
  const handleViewButtonPress = useCallback(() => {
    if (onViewButtonPress) {
      onViewButtonPress(item.id as number);
    }
  }, [item, onViewButtonPress]);

  const handleOnItemPress = useCallback(() => {
    if (onItemSelect) {
      onItemSelect({
        id: item.id,
        name: item.title,
        email: item.description,
        avatar: item.avatar,
      });
    }
  }, [item, onItemSelect]);

  const ItemImage = () => {
    return <Avatar source={{uri: item.avatar} as ImageURISource} />;
  };

  const ItemButtons = () => (
    <ButtonGroup>
      <Button size="small" onPress={handleViewButtonPress}>
        View
      </Button>
      <Button size="small" status="warning" onPress={handleViewButtonPress}>
        Edit
      </Button>
    </ButtonGroup>
  );

  return (
    <ListItem
      title={`${item.id} ${item.title}`}
      description={item.description}
      accessoryLeft={ItemImage}
      accessoryRight={ItemButtons}
      onPress={handleOnItemPress}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default DefaultListItem;
