import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SlideButton from "./SlideButton";
const LoginPage= () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    return(
        <View style={{ flex:1}}>
            <View style={{flex:1}}>
                <SlideButton/>
            </View>
    
              <View style={{ alignItems: 'center',paddingBottom:90,marginBottom:90 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Login In</Text>
              <View style={{ marginHorizontal: 30 }}>
                <TextInput placeholder="Email/PhoneNumber" style={styles.input} />
                <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
              <Image
                source={require('../Img/eye.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

               
               <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.check}></Text>
                <Text style={{fontSize:20,marginRight: 20 }}>Remember me </Text>
                <Text style={{fontSize:20,}}>Forget Password?</Text>
                </View>
        
               
                <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Login In</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',margin:20,}}>
              <Text style={{color:'black',fontSize:18}}>Don't have an account? </Text>
              <Text style={{color:'#018749',fontSize:18}}> Register now!</Text>
            </View> 
            </View>
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
    input: {
      fontSize:20,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginBottom: 20,
    },
    check: {
      fontSize: 20,
      marginRight: 8,
      borderWidth: 1,
      borderColor: 'black',
      width: 20,
      height: 20,
    },
    button: {
     backgroundColor: '#018749',
      borderRadius: 8,
      padding: 15,
      marginTop:50,
      shadowColor: 'red',
      shadowOpacity: 1.5,
      elevation: 8,
      shadowRadius: 20 ,
      shadowOffset : { width: 1, height: 13},
    },
    buttonText: {
      color: 'white',
      textAlign:'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
    //justifyContent:'center',
    paddingHorizontal: 60,
  },
  buttonwrapper: {
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
  },
  eyeButton: {
    padding: 10,
  },
  eyeIcon: {
    height: 20,
    width: 30,
  },
   
    
  });
  

export default LoginPage;