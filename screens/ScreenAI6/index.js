import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const handleSignUp = () => {// handle sign up logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput style={styles.input} placeholder="Date of Birth" value={dob} onChangeText={setDob} />
      <TextInput style={styles.input} placeholder="High School Grad Year" value={gradYear} onChangeText={setGradYear} />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
      <TextInput style={styles.input} placeholder="Country" value={country} onChangeText={setCountry} />
      <TextInput style={styles.input} placeholder="State" value={state} onChangeText={setState} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default SignUpScreen;