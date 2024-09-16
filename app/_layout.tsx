import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {

 const [fontsLoaded] = useFonts({
    'roboto-regular': require('@/assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('@/assets/fonts/Roboto-Bold.ttf'),
  });
  if (!fontsLoaded) {
    // Return any loading content here, e.g., a spinner, a plain React Native Text element, or a custom loading component.
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Loading...</Text></View>;
  }
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
