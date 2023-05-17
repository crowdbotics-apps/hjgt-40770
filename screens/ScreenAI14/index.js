import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Picker } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const [cardName, setCardName] = useState('');
  const [expires, setExpires] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  return <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Card Name</Text>
        <TextInput style={styles.input} value={cardName} onChangeText={setCardName} />
        <Text style={styles.label}>Expires</Text>
        <TextInput style={styles.input} value={expires} onChangeText={setExpires} />
        <Text style={styles.label}>Security Code</Text>
        <TextInput style={styles.input} value={securityCode} onChangeText={setSecurityCode} />
        <View style={styles.row}>
          <Text style={styles.label}>Save Card</Text>
          <Switch value={saveCard} onValueChange={setSaveCard} />
        </View>
        <Text style={styles.label}>Name on Card</Text>
        <TextInput style={styles.input} value={nameOnCard} onChangeText={setNameOnCard} />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Country</Text>
        <TextInput style={styles.input} value={country} onChangeText={setCountry} />
        <Text style={styles.label}>Street Address</Text>
        <TextInput style={styles.input} value={streetAddress} onChangeText={setStreetAddress} />
        <Text style={styles.label}>City</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} />
        <Text style={styles.label}>State</Text>
        <Picker style={styles.input} selectedValue={state} onValueChange={setState}>
          <Picker.Item label="Select State" value="" />
          <Picker.Item label="California" value="CA" />
          <Picker.Item label="New York" value="NY" />
          <Picker.Item label="Texas" value="TX" />
        </Picker>
        <Text style={styles.label}>ZIP Code</Text>
        <TextInput style={styles.input} value={zipCode} onChangeText={setZipCode} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI16");
      }}><Text style={styles.buttonText}>Continue</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  section: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;