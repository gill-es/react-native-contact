import {Item} from '../../../components/List/ListItem/DefaultListItem';
import {Contact} from '../types/contact';

const mapContactToListItem = (data: Array<Contact>): Array<Item> => {
  return data.map((item: Contact) => {
    return {
      id: item.id,
      title: item.name,
      description: item.email,
      avatar: item.avatar,
    } as Item;
  });
};

export default mapContactToListItem;
