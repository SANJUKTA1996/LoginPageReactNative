import React from "react";
import {View, Text} from 'react-native';
import SlideButton from "./SlideButton";
import Button from "./Button";
import GetStartedPageText from "./GetStartedPageText";
const GetStartedPage=() =>{
  

    return(
        <View style={{flex:1}}>
             <View style={{ flex: 1, marginTop: 90, paddingTop: 60 }}>
        <SlideButton />
      </View>

      <View style={{ flex: 1, marginBottom: 20, paddingBottom: 20 }}>
        <GetStartedPageText />
      </View>

      <View style={{flex:1, justifyContent:"center", alignItems:'center', }}>
            <Button />
      </View>


        </View>
    )
}

export default GetStartedPage