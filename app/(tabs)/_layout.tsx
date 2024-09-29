import { Tabs } from 'expo-router';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Tab() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveBackgroundColor: '',
                tabBarActiveTintColor: Colors.colorPrimary,
                tabBarInactiveTintColor: 'black'
            }}
        >
            <Tabs.Screen
                name="Search"
                options={{
                    headerTitle: 'search',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="Favorites"
                options={{
                    headerTitle: 'favorites',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="Bookings"
                options={{
                    headerTitle: 'bookings',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-minus-multiple-outline" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="Inbox"
                options={{
                    headerTitle: 'Inbox',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-reply-text-outline" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    headerTitle: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />
                }}
            />
        </Tabs>
    );
}
