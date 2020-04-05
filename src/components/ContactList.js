import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';

export const ContactList = (props) => {
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
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'ContactDetails',
                  passProps: {item},
                  options: {
                    topBar: {
                      title: {
                        text: 'Details',
                      },
                    },
                  },
                },
              })
            }
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
