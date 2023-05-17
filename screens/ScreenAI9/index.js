import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MembershipBenefitsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.benefitContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.benefitImage} />
        <View style={styles.benefitDetails}>
          <Text style={styles.benefitName}>Specific Membership Benefit</Text>
          <Text style={styles.benefitDescription}>
            Name: Discount amount and/or included item
          </Text>
        </View>
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
  benefitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  benefitImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  benefitDetails: {
    flex: 1
  },
  benefitName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  benefitDescription: {
    fontSize: 16,
    color: '#666'
  }
});
export default MembershipBenefitsScreen;