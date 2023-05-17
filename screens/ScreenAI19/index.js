import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DisplayParticipant = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.location}>New York, NY</Text>
      <Text style={styles.class}>Class of 2022</Text>
      <Text style={styles.age}>Age: 20</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    marginBottom: 10
  },
  class: {
    fontSize: 18,
    marginBottom: 10
  },
  age: {
    fontSize: 18
  }
});
export default DisplayParticipant;