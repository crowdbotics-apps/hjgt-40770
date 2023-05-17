import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const tournaments = [{
  name: 'Tournament 1',
  location: 'New York',
  date: 'January 1, 2022',
  completed: true
}, {
  name: 'Tournament 2',
  location: 'Los Angeles',
  date: 'February 14, 2022',
  completed: true
}, {
  name: 'Tournament 3',
  location: 'Chicago',
  date: 'March 17, 2022',
  completed: false
}];

const PastTournamentsScreen = () => {
  return <View style={styles.container}>
      {tournaments.map((tournament, index) => <View key={index} style={styles.tournamentContainer}>
          <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{tournament.name}</Text>
            <Text style={styles.location}>{tournament.location}</Text>
            <Text style={styles.date}>
              {tournament.date} {tournament.completed ? '- Completed' : ''}
            </Text>
          </View>
        </View>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  tournamentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  location: {
    fontSize: 16,
    marginBottom: 5
  },
  date: {
    fontSize: 14,
    color: '#888'
  }
});
export default PastTournamentsScreen;