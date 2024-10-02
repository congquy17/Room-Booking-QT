import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Item from '../components/search/beach/Item';

export default function Favorites() {
    const roomData = [
        {
            id: 1,
            name: 'Room with Ocean View',
            category: 'Beach',
            price: 120,
            rating: 4.8,
            imageUrl: 'https://th.bing.com/th/id/OIP.UfnkmLgG_dbPOEsZJ0G5VgAAAA?rs=1&pid=ImgDetMain'
        },
        {
            id: 2,
            name: 'Cozy Beach House',
            category: 'Beach',
            price: 100,
            rating: 4.5,
            imageUrl: 'https://th.bing.com/th/id/OIP.OnwkSJ55-36ycyNvYBrbeAAAAA?w=474&h=663&rs=1&pid=ImgDetMain'
        },
        {
            id: 3,
            name: 'Luxury Villa',
            category: 'Beach',
            price: 300,
            rating: 5.0,
            imageUrl: 'https://i.pinimg.com/originals/9e/fa/64/9efa64a6e484af14d04bacb6f8dc10e5.jpg'
        },
        {
            id: 4,
            name: 'Beachfront Bungalow',
            category: 'Beach',
            price: 150,
            rating: 4.7,
            imageUrl: 'https://th.bing.com/th/id/OIP.IwOfp5jFS1c9stsJjDrj0wAAAA?w=300&h=400&rs=1&pid=ImgDetMain'
        },
        {
            id: 5,
            name: 'Private Beach Cabin',
            category: 'Beach',
            price: 80,
            rating: 4.3,
            imageUrl: 'https://th.bing.com/th/id/OIP.uQA5YTyGfFiELv1CS2gA4gHaGj?w=1200&h=1061&rs=1&pid=ImgDetMain'
        }
    ];
    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <View
                style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 10,
                    backgroundColor: 'white'
                }}
            >
                <View style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 700 }}>Favorites</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'row',marginBottom:20 }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Placed you liked</Text>
            </View>

            {roomData.map((room) => (
                <Item room={room} key={room.id} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
        // justifyContent: 'center',
    }
});
