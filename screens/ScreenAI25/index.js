import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DisplayStatisticsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Statistics</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Hole</Text>
          <Text style={styles.label}>Par</Text>
          <Text style={styles.label}>Yardage</Text>
          <Text style={styles.label}>Rank</Text>
          <Text style={styles.label}>Average</Text>
          <Text style={styles.label}>To Par</Text>
          <Text style={styles.label}>Eagles</Text>
          <Text style={styles.label}>Birdies</Text>
          <Text style={styles.label}>Pars</Text>
          <Text style={styles.label}>Bogeys</Text>
          <Text style={styles.label}>Doubles</Text>
          <Text style={styles.label}>Others</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>1</Text>
          <Text style={styles.cell}>4</Text>
          <Text style={styles.cell}>420</Text>
          <Text style={styles.cell}>3</Text>
          <Text style={styles.cell}>4.2</Text>
          <Text style={styles.cell}>-1</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>1</Text>
          <Text style={styles.cell}>3</Text>
          <Text style={styles.cell}>1</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>2</Text>
          <Text style={styles.cell}>3</Text>
          <Text style={styles.cell}>180</Text>
          <Text style={styles.cell}>5</Text>
          <Text style={styles.cell}>3.5</Text>
          <Text style={styles.cell}>-1</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>2</Text>
          <Text style={styles.cell}>2</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
          <Text style={styles.cell}>0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
          <Text style={styles.cell}>...</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Total</Text>
          <Text style={styles.cell}>72</Text>
          <Text style={styles.cell}>6,800</Text>
          <Text style={styles.cell}>-</Text>
          <Text style={styles.cell}>-</Text>
          <Text style={styles.cell}>-4</Text>
          <Text style={styles.cell}>1</Text>
          <Text style={styles.cell}>5</Text>
          <Text style={styles.cell}>8</Text>
          <Text style={styles.cell}>3</Text>
          <Text style={styles.cell}>1</Text>
          <Text style={styles.cell}>0</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  cell: {
    fontSize: 16,
    color: '#000'
  },
  footer: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80
  }
});
export default DisplayStatisticsScreen;