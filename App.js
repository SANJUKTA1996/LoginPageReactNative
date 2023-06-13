import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import GetStartedPage from './components/GetStartedPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {

  const Stack= createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="GetStartedPage" component={GetStartedPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1
   
    
   
  },
});

export default App;
