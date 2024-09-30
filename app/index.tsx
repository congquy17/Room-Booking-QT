import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from './views/auth/sign-in/SignIn';
import SignUp from './views/auth/sign-up/SignUp';
import Main from './views/Main';
import DetailRoom from './views/DetailRoom';
import Facilities from './views/Facilities';
import Review from './views/Review';
import Description from './views/Description';
import ComfirmAndPay from './views/ComfirmAndPay';
import Successfully from './views/Successfully';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
                <Stack.Screen options={{ headerShown: false }} name="DetailRoom" component={DetailRoom} />
                 <Stack.Screen options={{ headerShown: false }} name="Review" component={Review} />
                 <Stack.Screen options={{ headerShown: false }} name="Facilities" component={Facilities} />
                 <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                 <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} /> 
                <Stack.Screen options={{ headerShown: false }} name="Description" component={Description} />
                <Stack.Screen options={{ headerShown: false }} name="ComfirmAndPay" component={ComfirmAndPay} />
                <Stack.Screen options={{ headerShown: false }} name="Successfully" component={Successfully} />
               
                
            </Stack.Navigator>
        </NavigationContainer>
        // <Redirect href={'/auth/sign-in/SignIn'} />
    );
}
