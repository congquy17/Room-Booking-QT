import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import Favorites from './Favorites'; // Ensure the component name starts with uppercase
import Booking from './Bookings';
import Inbox from './Inbox';
import Profile from './Profile';
import { Colors } from '@/constants/Colors'; // Ensure you have this Colors file configured

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.colorPrimary, // Change this to your primary color
                tabBarInactiveTintColor: 'black', // Change this to your inactive color
                tabBarStyle: {
                    position: 'absolute', // Ensures the tab bar is positioned at the bottom
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60, // Adjust height as needed
                    elevation: 5, // For Android shadow effect
                    backgroundColor: 'white', // Change background color if necessary
                },
            }}
        >
            <Tab.Screen
                name="Search"
                options={{
                    headerTitle: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }}
                component={Search}
            />
            <Tab.Screen
                name="Favorites"
                options={{
                    headerTitle: 'Favorites',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} />,
                }}
                component={Favorites}
            />
            <Tab.Screen
                name="Bookings"
                options={{
                    headerTitle: 'Bookings',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-minus-multiple-outline" size={24} color={color} />
                    ),
                }}
                component={Booking}
            />
            <Tab.Screen
                name="Inbox"
                options={{
                    headerTitle: 'Inbox',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-reply-text-outline" size={24} color={color} />
                    ),
                }}
                component={Inbox}
            />
            <Tab.Screen
                name="Profile"
                options={{
                    headerTitle: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
                }}
                component={Profile}
            />
        </Tab.Navigator>
    );
}
