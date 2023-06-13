import React  from "react";
import { View, Text, StyleSheet } from "react-native";

const SwipeableText = () => {

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
          Klinic -{' '}
        </Text>
        <Text style={{ fontWeight:300, fontSize: 35, color: "black" }}>
          No{" "}
        </Text>
      </View>
      <View>
        <Text style={{fontWeight:300, fontSize:35, color:'black'}}>
          appointments or
        </Text>
      </View>
      <View>
        <Text style={{fontWeight:300, fontSize:35, color:'black'}}>
          video calls required
        </Text>
      </View>
      <View>
        <Text style={{fontWeight:300, fontSize:15, color:'gray', marginLeft:10,marginRight:10}}>
          Start a visit quickly and discreetly, whenever 
        </Text>
        <Text style={{fontWeight:300, fontSize:15, color:'gray', marginLeft:20,marginRight:20}}>
          works best for you and get a treatments
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

export default SwipeableText;
