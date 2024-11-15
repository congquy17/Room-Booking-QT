import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import API_Mobile from '../../../util/constan';
import { addFavorite, removeFavorite } from '@/app/store/slices/authSlice';
export default function Item({ room, isFavorite }: any) {
    const navigation = useNavigation();
    const { user } = useSelector((state: any) => state.auth);
    const [favorite, setFavorite] = useState(room.isFavorite || isFavorite || false); // State to track favorite status
    const dispatch = useDispatch();
    // Function to handle the like/unlike action

    const handleLikePress = async () => {
        try {
            if (favorite) {
                await axios.put(`${API_Mobile}/users/remove-favorite/${user._id}/${room._id}`);
                dispatch(removeFavorite(room._id)); // Update Redux state
            } else {
                await axios.put(`${API_Mobile}/users/add-favorite/${user._id}/${room._id}`);
                dispatch(addFavorite(room._id)); // Update Redux state
            }
            setFavorite(!favorite);
        } catch (error) {
            console.error('Failed to update favorite status', error);
        }
    };

    return (
        <View key={room.id} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailRoom', { roomId: room._id })}>
                <ImageBackground style={styles.imageBackground} source={{ uri: room?.listImage[0] }}>
                    {!isFavorite ? (
                        <TouchableOpacity style={styles.heartContainer} onPress={handleLikePress}>
                            <AntDesign
                                name="heart"
                                size={24}
                                style={[styles.heartIcon, favorite ? styles.heartFavorite : null]}
                            />
                        </TouchableOpacity>
                    ) : null}
                </ImageBackground>
                <View style={styles.roomDetails}>
                    <View>
                        <Text style={styles.roomName}>{room.name}</Text>
                        <Text style={styles.roomCategory}>{room.category}</Text>
                    </View>
                    <View>
                        <View style={styles.ratingContainer}>
                            <AntDesign name="star" size={20} color="#eccd60" />
                            <Text>{room.rating}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text>${room.price}/night</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    imageBackground: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 400,
        width: '100%'
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 100
    },
    heartIcon: {
        color: 'white' // Default color
    },
    heartFavorite: {
        color: 'red' // Red color for favorites
    },
    roomDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    roomName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    roomCategory: {
        marginTop: 5
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceContainer: {
        marginTop: 5
    }
});
