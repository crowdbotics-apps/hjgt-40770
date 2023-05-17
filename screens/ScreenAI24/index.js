import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RoundScreen = () => {
  const [selectedRound, setSelectedRound] = useState(1);
  const data = [{
    time: '10:00 AM',
    players: 'Player 1 vs Player 2',
    fullName: 'John Doe',
    score: '2-1'
  }, {
    time: '11:00 AM',
    players: 'Player 3 vs Player 4',
    fullName: 'Jane Smith',
    score: '0-0'
  }, {
    time: '12:00 PM',
    players: 'Player 5 vs Player 6',
    fullName: 'Bob Johnson',
    score: '1-3'
  }];
  return <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.roundButton, selectedRound === 1 && styles.selectedButton]} onPress={() => setSelectedRound(1)}>
          <Text style={[styles.buttonText, selectedRound === 1 && styles.selectedText]}>Round 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.roundButton, selectedRound === 2 && styles.selectedButton]} onPress={() => setSelectedRound(2)}>
          <Text style={[styles.buttonText, selectedRound === 2 && styles.selectedText]}>Round 2</Text>
        </TouchableOpacity>
      </View>
      {data.map((item, index) => {
      if (selectedRound === 1 && index < 2) {
        return <View key={index} style={styles.detailsContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
              <View style={styles.playerContainer}>
                <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={styles.playerImage} />
                <Text style={styles.playerText}>{item.players}</Text>
              </View>
              <Text style={styles.fullNameText}>{item.fullName}</Text>
              <Text style={styles.scoreText}>{item.score}</Text>
            </View>;
      } else if (selectedRound === 2 && index >= 2) {
        return <View key={index} style={styles.detailsContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
              <View style={styles.playerContainer}>
                <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={styles.playerImage} />
                <Text style={styles.playerText}>{item.players}</Text>
              </View>
              <Text style={styles.fullNameText}>{item.fullName}</Text>
              <Text style={styles.scoreText}>{item.score}</Text>
            </View>;
      }
    })}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  roundButton: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10
  },
  selectedButton: {
    backgroundColor: '#007AFF'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  selectedText: {
    color: '#fff'
  },
  detailsContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  playerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  playerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  fullNameText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default RoundScreen;