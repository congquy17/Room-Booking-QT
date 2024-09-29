import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require('@/assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('@/assets/fonts/Roboto-Medium.ttf'),
        'roboto-bold': require('@/assets/fonts/Roboto-Bold.ttf')
    });
    if (!fontsLoaded) {
        // Return any loading content here, e.g., a spinner, a plain React Native Text element, or a custom loading component.
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
                <Image
                    source={{
                        uri: 'https://marketplace.canva.com/EAE85VgPq3E/1/0/1600w/canva-v%E1%BA%BD-tay-h%C3%ACnh-tr%C3%B2n-logo-c3Jw1yOiXJw.jpg'
                    }}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
            </View>
        );
    }
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
            <Tabs.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                    headerTitle: '',
                    tabBarStyle: { display: 'none' }
                }}
            />
        </Tabs>
    );
}
