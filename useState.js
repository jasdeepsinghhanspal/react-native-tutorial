import React, { useState } from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

const App=()=>{
    const nextNumber=()=>{
        setCount(count+1);
    }
    const Reset=()=>{
        setCount(0);
    }
    const [count,setCount]=useState(0);
    return(
        <View>
            <Text>Count={count}</Text>
            <Button title='click' onPress={nextNumber}></Button>
            <Button title='reset' onPress={Reset}></Button>
        </View>
    )
}
export default App;
