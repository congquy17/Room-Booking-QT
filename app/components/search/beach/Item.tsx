import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Item({ room, isFavorite }: any) {
    const navigation = useNavigation();

    return (
        <View key={room.id} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailRoom')}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={{ uri: room.listImage[0] }}
                >
                    <TouchableOpacity style={styles.heartContainer}>
                        <AntDesign
                            name="heart"
                            size={24}
                            style={[
                                styles.heartIcon,
                                isFavorite ? styles.heartFavorite : null,
                            ]}
                        />
                    </TouchableOpacity>
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
        marginBottom: 20,
    },
    imageBackground: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 400,
        width: '100%',
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 100,
    },
    heartIcon: {
        color: 'white', // Default color
    },
    heartFavorite: {
        color: 'red', // Red color for favorites
    },
    roomDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    roomName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    roomCategory: {
        marginTop: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceContainer: {
        marginTop: 5,
    },
});
