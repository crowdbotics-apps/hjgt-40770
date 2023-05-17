import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DisplayCardScreen = () => {
  const [toggle, setToggle] = useState(false);
  return <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>Card Information</Text>
          <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          <Text style={styles.cardExpiry}>Expiry: 12/24</Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount: $50.00</Text>
      </View>
      <TouchableOpacity style={styles.termsButton} onPress={() => setToggle(!toggle)}>
        <Text style={styles.termsButtonText}>Terms</Text>
      </TouchableOpacity>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>I agree to the Terms</Text>
        <TouchableOpacity style={toggle ? styles.toggleButtonOn : styles.toggleButtonOff} onPress={() => setToggle(!toggle)} />
      </View>
      <TouchableOpacity style={styles.processButton}>
        <Text style={styles.processButtonText}>Process Order</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  cardImage: {
    width: 80,
    height: 50,
    resizeMode: 'contain'
  },
  cardDetails: {
    marginLeft: 20
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cardNumber: {
    fontSize: 16,
    marginBottom: 5
  },
  cardExpiry: {
    fontSize: 16
  },
  totalContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  termsButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  termsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  toggleText: {
    fontSize: 16,
    marginRight: 10
  },
  toggleButtonOff: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc'
  },
  toggleButtonOn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4caf50'
  },
  processButton: {
    backgroundColor: '#4caf50',
    borderRadius: 10,
    padding: 20
  },
  processButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});
export default DisplayCardScreen;