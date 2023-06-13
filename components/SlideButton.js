import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const SlideButton = ({ onPress }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (button) => {
    if (button === selectedButton) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }

    if (onPress) {
      onPress(button);
    }
  };

  const renderButtonStyle = (button) => {
    if (selectedButton === button) {
      return styles.selectedButton;
    }
    return null;
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <View style={styles.button}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => handlePress('Logo')}
            style={[styles.textContainer, renderButtonStyle('Logo')]}
          >
            <Text style={styles.text}>Logo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress('Ipsum')}
            style={[styles.textContainer, renderButtonStyle('Ipsum')]}
          >
            <Text style={styles.text}>Ipsum</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 60,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:0,
    width:20,
    height:50,
    

  },
});

export default SlideButton;
