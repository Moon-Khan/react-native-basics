// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Login = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />

        </View>
    );
}
const Stack = createNativeStackNavigator();

const stack_navig = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitle: "Mamoon's App",
                headerStyle: {
                    backgroundColor: 'cyan',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center'

            }} >
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stack_navig;