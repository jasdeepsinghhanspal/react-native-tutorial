import React,{useState} from 'react';
import { View, Text, Alert, StyleSheet, TextInput, TouchableHighlight, ToastAndroid } from 'react-native';
const App=()=>{
    const [name,setName]=useState('');
    const [submit,setSubmit]=useState(false);
    const onPressHandler=()=>{
        if(name.length>3){
        setSubmit(!submit);}
        else{
           ToastAndroid.show("This string should be longer",ToastAndroid.LONG)
        }
    }
    return(
        <View style={styles.body}>
            <Text>Please Enter your Name</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter a names'
            onChangeText={(v)=>setName(v)}
            />
            <TouchableHighlight
            style={styles.button}
            onPress={onPressHandler}
            activeOpacity={0.8}
            >
                <Text>
                    {submit ?'clear':'submit'}
                </Text>
                 </TouchableHighlight>
            {submit ?
            <Text>Your Name={name}</Text>:null}
           
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
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:80,
        borderWidth:2,
        marginTop:20,
        borderBlockColor:'#000',
        color:'#ff1234',
        backgroundColor:'#ff1111'
    }
}); 
export default App;
