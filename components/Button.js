import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Button = () => {
    const navigation=useNavigation();
    const handleButtonPress =() => {
        navigation.navigate("LoginPage");
    }
  return (
    <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#018749',
    width:'90%',
    margin:30,
    height:55,
    justifyContent:'center',
    borderRadius:12,
    shadowColor: '#002D62',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},

  },
   
  buttonText: {
    textAlign:'center',
    color:"white",
    fontWeight:'bold',
    fontSize:18

  },
});

export default Button;