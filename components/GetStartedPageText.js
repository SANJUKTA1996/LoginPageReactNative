import React  from "react";
import { View, Text, StyleSheet } from "react-native";
import GetStartedPage from "./GetStartedPage";

const GetStartedPageText = () => {

  const dotCount = 3; // Number of dot markers

  const renderDotMarkers = () => {
    const dotMarkers = [];

    for (let i = 0; i < dotCount; i++) {
      dotMarkers.push(
        <View
          key={i}
          style={[
            styles.dotMarker,
            { marginLeft: i === 5 ? 6 : 5, width: 15, height: 15 },
          ]}
        />
      );
    }

    return dotMarkers;
  };

  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>{renderDotMarkers()}</View>

      <View style={styles.rowContainer}>

        <Text style={{ fontWeight: "bold", fontSize: 40, color: "black" }}>
          Career & Event
        </Text>
      </View>
      <View>
        <Text style={{fontWeight:300, fontSize:15, color:'gray', marginLeft:10,marginRight:10}}>
          While you train, we bring you the relevent 
        </Text>
        <Text style={{fontWeight:300, fontSize:15, color:'gray', marginLeft:20,marginRight:20}}>
          jobs and events to cater employment
          </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 30,
  },
  dotMarker: {
    borderRadius: 6,
    backgroundColor: "gray",
  },
  rowContainer: {
    flexDirection: "row",
  },

});

export default GetStartedPageText;
