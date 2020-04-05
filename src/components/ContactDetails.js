import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

export const ContactDetails = (props) => {
  return (
    <View style={styles.container}>
      <Text h3>{props.item.name}</Text>
      <Text h4>
        {props.item.address.street}, {props.item.address.city}
      </Text>
      <Text h4>{props.item.phone}</Text>
      <Text h4>{props.item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    margin: 20,
    lineHeight: 20,
  },
});
