import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';
const App=()=>{
    return(
        <View style={styles.body}>
            <Text style={styles.text}>Hello everyone</Text>
            <Button title='Click' onPress={()=>{Linking.openURL('https://youtu.be/q48Fhqa3hc8?si=kaFXQVCDKwHM66O7')}}></Button>
        </View>
    );
};
const styles=StyleSheet.create({
    body:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#0000ff',
      flex:1,
    },
    text:{
        color:'#ffffff',
    }
  })
export default App;


