import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const participants = [{
  id: 1,
  image: 'https://tinyurl.com/42evm3m3',
  name: 'John Doe',
  location: 'New York, NY',
  class: 'A'
}, {
  id: 2,
  image: 'https://tinyurl.com/42evm3m3',
  name: 'Jane Smith',
  location: 'Los Angeles, CA',
  class: 'B'
}, {
  id: 3,
  image: 'https://tinyurl.com/42evm3m3',
  name: 'Bob Johnson',
  location: 'Chicago, IL',
  class: 'C'
}];

const OverviewScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tournament Name</Text>
        <Text style={styles.date}>Date: From - To</Text>
        <Text style={styles.course}>Course Name</Text>
        <Text style={styles.deadline}>Registration Deadline: Date</Text>
        <Text style={styles.eligibility}>Eligibility: Open to all</Text>
        <Text style={styles.price}>Price: Members - $50, Non-Members - $75</Text>
      </View>
      <View style={styles.participants}>
        {participants.map(participant => <View key={participant.id} style={styles.participant}>
            <Image source={{
          uri: participant.image
        }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{participant.name}</Text>
              <Text style={styles.location}>{participant.location}</Text>
              <Text style={styles.class}>Class: {participant.class}</Text>
            </View>
          </View>)}
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  date: {
    fontSize: 18,
    marginBottom: 5
  },
  course: {
    fontSize: 18,
    marginBottom: 5
  },
  deadline: {
    fontSize: 18,
    marginBottom: 5
  },
  eligibility: {
    fontSize: 18,
    marginBottom: 5
  },
  price: {
    fontSize: 18,
    marginBottom: 20
  },
  participants: {
    flex: 1
  },
  participant: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  details: {
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
  class: {
    fontSize: 16
  }
});
export default OverviewScreen;