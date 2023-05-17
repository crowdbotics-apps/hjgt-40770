import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI10");
      }}><Text style={styles.BADZAobv}>{"Hamburger - menu"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI4");
      }}><Text style={styles.MhqsYLia}>{"Complete your Experience"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.bGwxfpVF}>{"Sign up"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={styles.NVGUpXTV}>{"Sign up"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI9");
      }}><Text style={styles.ubhqWaRu}>{"Memberships"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI17");
      }}><Text style={styles.MDCIDktt}>{"Tournament Schedule"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI20");
      }}><Text style={styles.peUnpvNk}>{"Live Leaderboard"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.WWOkXKDT}>{"Past Results"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI22");
      }}><Text style={styles.idYFyCMt}>{"Rankings"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  BADZAobv: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  MhqsYLia: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  bGwxfpVF: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NVGUpXTV: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ubhqWaRu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  MDCIDktt: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  peUnpvNk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  WWOkXKDT: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  idYFyCMt: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;