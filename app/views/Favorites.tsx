import { SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Item from '../components/search/beach/Item';  // Import your custom Item component
import { useSelector } from 'react-redux';
import axios from 'axios';
import API_Mobile from '../util/constan';

export default function Favorites() {
    // Define the type for FavoriteRoom
    interface FavoriteRoom {
        _id: string;
        roomId: any;  
    }

    const [loading, setLoading] = useState(true);
    const [favoriteRooms, setFavoriteRooms] = useState<FavoriteRoom[]>([]);
    const [error, setError] = useState<string>('');

    const { user } = useSelector((state: any) => state.auth);
    const favoriteRoomIds = user?.favorites || [];  

    useEffect(() => {
        const fetchFavoriteRooms = async () => {
            if (favoriteRoomIds.length === 0) {
                setLoading(false); 
                return;
            }

            try {
                const response = await axios.post(`${API_Mobile}/rooms/get-rooms-by-ids`, { roomIds: favoriteRoomIds });
                setFavoriteRooms(response.data); 
            } catch (error) {
                setError('Failed to fetch favorite rooms'); 
                console.error('Error fetching favorite rooms:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchFavoriteRooms();
    }, [favoriteRoomIds]); 

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Favorites</Text>
            </View>

            <View style={styles.subHeaderContainer}>
                <Text style={styles.subtitle}>Places you liked</Text>
            </View>

            {favoriteRooms.length > 0 ? (
                favoriteRooms.map((room: FavoriteRoom) => (
                    <Item room={room} key={room._id} isFavorite={true} />
                ))
            ) : (
                <Text style={styles.noFavoritesText}>No favorite rooms found.</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8d7da',
        padding: 20,
    },
    errorText: {
        color: '#721c24',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    subHeaderContainer: {
        marginBottom: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '700',
    },
    noFavoritesText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
});
