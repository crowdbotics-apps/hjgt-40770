import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const tournaments = [{
  name: 'Summer Classic',
  course: 'Pine Valley Golf Club',
  category: 'Amateur',
  location: 'New Jersey, USA',
  date: 'August 15-17, 2021',
  divisions: [{
    rank: '1st',
    name: 'Men\'s Open'
  }, {
    rank: '2nd',
    name: 'Men\'s Senior'
  }, {
    rank: '3rd',
    name: 'Women\'s Open'
  }]
}, {
  name: 'Fall Invitational',
  course: 'Augusta National Golf Club',
  category: 'Professional',
  location: 'Georgia, USA',
  date: 'October 1-3, 2021',
  divisions: [{
    rank: '1st',
    name: 'Men\'s Pro'
  }, {
    rank: '2nd',
    name: 'Women\'s Pro'
  }]
}];

const UpcomingTournamentsScreen = () => {
  return <View style={styles.container}>
      {tournaments.map((tournament, index) => <View key={index} style={styles.tournamentContainer}>
          <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{tournament.name}</Text>
            <Text style={styles.course}>{tournament.course}</Text>
            <Text style={styles.category}>{tournament.category}</Text>
            <Text style={styles.location}>{tournament.location}</Text>
            <Text style={styles.date}>{tournament.date}</Text>
            {tournament.divisions.map((division, index) => <View key={index} style={styles.divisionContainer}>
                <Text style={styles.divisionRank}>{division.rank}</Text>
                <Text style={styles.divisionName}>{division.name}</Text>
              </View>)}
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
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10
  },
  detailsContainer: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  course: {
    fontSize: 16,
    marginBottom: 5
  },
  category: {
    fontSize: 16,
    marginBottom: 5
  },
  location: {
    fontSize: 16,
    marginBottom: 5
  },
  date: {
    fontSize: 16,
    marginBottom: 10
  },
  divisionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  divisionRank: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5
  },
  divisionName: {
    fontSize: 16
  }
});
export default UpcomingTournamentsScreen;