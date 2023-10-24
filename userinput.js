import React,{useState} from 'react';
import { View, Text, SectionList, StyleSheet, TextInput } from 'react-native';
const App=()=>{
    const [name,setName]=useState('');
    return(
        <View style={styles.body}>
            <Text>Please Enter your Name</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter a name'
            onChangeText={(v)=>setName(v)}
            />
            <Text>Your Name={name}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        width:200,
        borderWidth:2,
        fontSize:18,
    },
    body:{
        textAlign:'center',
        flex:1,
    }
}); 
export default App;
