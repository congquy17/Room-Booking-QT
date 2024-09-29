import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';
const roomData = [
    {
        id: 1,
        name: 'Room with Ocean View',
        category: 'Beach',
        price: 120,
        rating: 4.8,
        imageUrl: 'https://th.bing.com/th/id/OIP.OnwkSJ55-36ycyNvYBrbeAAAAA?w=474&h=663&rs=1&pid=ImgDetMain'
    },
    {
        id: 2,
        name: 'Cozy Beach House',
        category: 'Beach',
        price: 100,
        rating: 4.5,
        imageUrl: 'https://th.bing.com/th/id/OIP.UfnkmLgG_dbPOEsZJ0G5VgAAAA?rs=1&pid=ImgDetMain'
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
export default function Mountain() {
    const [rooms, setRooms] = React.useState(roomData);
    return (
        <ScrollView>
            <ScrollView>
                {rooms.map((rooms) => (
                    <MountainRoom room={rooms} key={rooms.id} />
                ))}
            </ScrollView>
        </ScrollView>
    );
}
const MountainRoom = ({ room }: any) => {
    return (
        <View key={room.id} style={{ marginBottom: 20 }}>
            <ImageBackground
                style={{
                    borderRadius: 10,
                    overflow: 'hidden',
                    height: 400,
                    width: '100%'
                }}
                source={{ uri: room.imageUrl }}
            >
                <TouchableOpacity>
                    <AntDesign
                        name="hearto"
                        size={24}
                        color="red"
                        style={{
                            backgroundColor: 'white',
                            position: 'absolute',
                            padding: 10,
                            top: 10,
                            right: 10,
                            borderRadius: 100
                        }}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10
                }}
            >
                <View>
                    <Text style={styles.h3}>{room.name}</Text>
                    <Text style={{ marginTop: 5 }}>{room.category}</Text>
                </View>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <AntDesign name="star" size={20} color="#eccd60" />
                        <Text>{room.rating}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text>${room.price}/night</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    h3: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
