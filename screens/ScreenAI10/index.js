import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Golf Club</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Live Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Past Results</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rankings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Membership</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI11");
        }}><Text style={styles.buttonText}>Junior Gold Club</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bag Boy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("userProfile");
        }}><Text style={styles.buttonText}>Profile</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Pressable onPress={() => {
          navigation.navigate("cart");
        }}><Text style={styles.buttonText}>Cart</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '48%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default HomeScreen;