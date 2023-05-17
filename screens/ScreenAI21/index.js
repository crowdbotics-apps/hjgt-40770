import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const tournamentImage = 'https://tinyurl.com/42evm3m3';

const TournamentScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: tournamentImage
      }} style={styles.image} />
        <Text style={styles.title}>Specific Tournament</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Name: Tournament Name</Text>
        <Text style={styles.location}>Location: Tournament Location</Text>
        <Text style={styles.date}>Date: Tournament Date</Text>
        <Text style={styles.completed}>Completed: Yes/No</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  details: {
    padding: 20
  },
  name: {
    fontSize: 18,
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    marginBottom: 10
  },
  date: {
    fontSize: 18,
    marginBottom: 10
  },
  completed: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default TournamentScreen;