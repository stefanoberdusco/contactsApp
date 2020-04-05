import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export const ContactList = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text h4>{props.item.name}</Text>
      <Text>{props.item.email}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
  },
});
