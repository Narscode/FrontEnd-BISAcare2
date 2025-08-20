import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorld = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, BISAcare2!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    color: '#2a2a2a',
  },
});

export default HelloWorld;