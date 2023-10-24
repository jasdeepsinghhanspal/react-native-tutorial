import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ScreenA({ navigation }) {
    const onPressHandler = () => {
        navigation.navigate('Screen_B');
    }

    return (
        <View>
            <Text>Screen A</Text>
            <Pressable onPress={onPressHandler}>
                <Text>Screen B</Text>
            </Pressable>
        </View>
    )
}

function ScreenB({ navigation }) {
    const onPressHandler = () => {
        navigation.navigate('Screen_A');
    }

    return (
        <View>
            <Text>Screen B</Text>
            <Pressable onPress={onPressHandler}>
                <Text>Screen A</Text>
            </Pressable>
        </View>
    )
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => null
                }}
            >
                <Stack.Screen
                    name="Screen_A"
                    component={ScreenA}
                />

                <Stack.Screen
                    name="Screen_B"
                    component={ScreenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
