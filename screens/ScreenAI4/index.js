import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.tournamentContainer}>
          <Text style={styles.tournamentTitle}>Upcoming Tournament</Text>
          <View style={styles.tournamentDetails}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.tournamentImage} />
            <View style={styles.tournamentInfo}>
              <Text style={styles.tournamentName}>Junior Golf Championship</Text>
              <Text style={styles.tournamentDate}>June 12, 2022</Text>
              <Text style={styles.tournamentHoles}>18 Holes</Text>
            </View>
          </View>
        </View>
        <View style={styles.tournamentContainer}>
          <Text style={styles.tournamentTitle}>Your Tournament</Text>
          <View style={styles.tournamentDetails}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.tournamentImage} />
            <View style={styles.tournamentInfo}>
              <Text style={styles.tournamentName}>Junior Golf Open</Text>
              <Text style={styles.tournamentDate}>May 22, 2022</Text>
              <Text style={styles.tournamentHoles}>9 Holes</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.pushCartTitle}>Push Cart</Text>
        <View style={styles.pushCartDetails}>
          <Text style={styles.pushCartPrice}>$50</Text>
          <TextInput style={styles.pushCartQuantity} placeholder="Quantity" keyboardType="numeric" />
        </View>
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
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
  section1: {
    marginBottom: 30
  },
  tournamentContainer: {
    marginBottom: 20
  },
  tournamentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  tournamentDetails: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tournamentImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  tournamentInfo: {
    flex: 1
  },
  tournamentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  tournamentDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  tournamentHoles: {
    fontSize: 14,
    color: '#666'
  },
  section2: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10
  },
  pushCartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  pushCartDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  pushCartPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  pushCartQuantity: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16
  },
  proceedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5
  },
  proceedButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;