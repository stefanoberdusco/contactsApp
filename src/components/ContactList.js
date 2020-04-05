import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      const fetcher = await window.fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const response = await fetcher.json();
      setContacts(response);
    };
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <ListItem
            title={item.name}
            subtitle={item.email}
            bottomDivider
            chevron
          />
        )}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
  },
});
