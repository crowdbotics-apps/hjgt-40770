import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const JuniorGoldHubScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Advantages of Junior Gold Hub</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel bibendum sapien. Sed euismod euismod libero, vel
          bibendum sapien.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel bibendum sapien. Sed euismod euismod libero, vel
          bibendum sapien.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#ff9900',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default JuniorGoldHubScreen;