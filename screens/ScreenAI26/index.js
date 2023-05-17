import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
const playerData = [{
  name: 'John Doe',
  rank: 1,
  score: 100,
  status: 'Active',
  points: 200
}, {
  name: 'Jane Doe',
  rank: 2,
  score: 90,
  status: 'Inactive',
  points: 180
}, {
  name: 'Bob Smith',
  rank: 3,
  score: 80,
  status: 'Active',
  points: 160
}, {
  name: 'Alice Johnson',
  rank: 4,
  score: 70,
  status: 'Inactive',
  points: 140
}];
const divisions = ['Division 1', 'Division 2', 'Division 3', 'Division 4'];

const DisplayDivisionsScreen = () => {
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);

  const handleDivisionSelect = division => {
    setSelectedDivision(division);
  };

  const renderPlayerRankings = () => {
    return playerData.map(player => <View style={styles.playerContainer} key={player.name}>
        <Text style={styles.playerName}>{player.name}</Text>
        <Text style={styles.playerRank}>Rank: {player.rank}</Text>
        <Text style={styles.playerScore}>Score: {player.score}</Text>
        <Text style={styles.playerStatus}>Status: {player.status}</Text>
        <Text style={styles.playerPoints}>Points: {player.points}</Text>
      </View>);
  };

  const renderDivisions = () => {
    return divisions.map(division => <Text key={division} style={[styles.divisionText, selectedDivision === division && styles.selectedDivisionText]} onPress={() => handleDivisionSelect(division)}>
        {division}
      </Text>);
  };

  return <View style={styles.container}>
      <ScrollView>
        <View style={styles.divisionsContainer}>{renderDivisions()}</View>
        <View style={styles.playerRankingsContainer}>
          <Text style={styles.playerRankingsTitle}>
            {selectedDivision} Player Rankings
          </Text>
          {renderPlayerRankings()}
        </View>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  divisionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  divisionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  selectedDivisionText: {
    color: '#007AFF'
  },
  playerRankingsContainer: {
    marginBottom: 20
  },
  playerRankingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  playerContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  playerRank: {
    fontSize: 16,
    marginBottom: 5
  },
  playerScore: {
    fontSize: 16,
    marginBottom: 5
  },
  playerStatus: {
    fontSize: 16,
    marginBottom: 5
  },
  playerPoints: {
    fontSize: 16
  }
});
export default DisplayDivisionsScreen;