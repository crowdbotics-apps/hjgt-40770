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
      }}><Text style={styles.ubhqWaRu}>{"Memberships"}</Text></Pressable></ScrollView>
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
  }
});
export default Untitled2;