import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Season 2021-2022</Text>
      </View>
      <View style={styles.divisionContainer}>
        <Text style={styles.divisionText}>Division A</Text>
        <Text style={styles.divisionText}>Division B</Text>
        <Text style={styles.divisionText}>Division C</Text>
      </View>
      <View style={styles.rankingsContainer}>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>1</Text>
          <Image style={styles.playerImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>John Doe</Text>
            <Text style={styles.playerLocation}>New York, NY</Text>
          </View>
          <Text style={styles.pointsText}>1000</Text>
        </View>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>2</Text>
          <Image style={styles.playerImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Jane Smith</Text>
            <Text style={styles.playerLocation}>Los Angeles, CA</Text>
          </View>
          <Text style={styles.pointsText}>900</Text>
        </View>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>3</Text>
          <Image style={styles.playerImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>Bob Johnson</Text>
            <Text style={styles.playerLocation}>Chicago, IL</Text>
          </View>
          <Text style={styles.pointsText}>800</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  divisionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  divisionText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  rankingsContainer: {
    flex: 1
  },
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  playerInfo: {
    flex: 1
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  playerLocation: {
    fontSize: 14,
    color: '#999'
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;