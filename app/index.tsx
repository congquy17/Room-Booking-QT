import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';
import { Redirect } from 'expo-router';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        // <NavigationContainer independent={true}>
        //     <Stack.Navigator>
        //         <Stack.Screen name="SignIn" component={SignIn} />
        //         <Stack.Screen name="SignUp" component={SignUp} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <Redirect href={'/auth/sign-in/SignIn'} />
    );
}
