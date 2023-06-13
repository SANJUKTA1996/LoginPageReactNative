import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'
import SlideButton from "./SlideButton";
import SwipeableText from "./SwipeableText";


const HomePage = () => {
    const navigation=useNavigation();
    const handleSkip=() => {
        navigation.navigate("GetStartedPage");
        console.log("clicked")
    }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 90, paddingTop: 60 }}>
        <SlideButton />
      </View>
      <View style={{ flex: 1, marginBottom: 90, paddingBottom: 70 }}>
        <SwipeableText />
      </View>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={handleSkip}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  skipButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  skipText: {
    fontSize: 18,
    color: "black",
  
  },
};

export default HomePage;
