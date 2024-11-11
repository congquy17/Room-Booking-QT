import { SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Item from '../components/search/beach/Item';
import API_Mobile from '../util/constan';
import { useSelector } from 'react-redux';

export default function Favorites() {
    interface FavoriteRoom {
        _id: string;
        roomId: string;
    }

    const [favoriteData, setFavoriteData] = useState<FavoriteRoom[]>([]); // State lưu dữ liệu yêu thích
    const [loading, setLoading] = useState(true); // State để theo dõi trạng thái tải
    const [error, setError] = useState(null); // State để theo dõi lỗi nếu có
    const {user} = useSelector((state: any) => state.auth);

    useEffect(() => {
        // Hàm gọi API để lấy dữ liệu yêu thích
        const fetchFavoriteData = async () => {
            try {
                const response = await axios.get(`${API_Mobile}/favories/${user._id}`); // Gọi API lấy dữ liệu yêu thích
                console.log(response.data); // Kiểm tra dữ liệu trả về
                setFavoriteData(response.data); // Lưu dữ liệu vào state
            } catch (error) {
                setError((error as any).message); // Lưu lỗi vào state nếu có lỗi xảy ra
            } finally {
                setLoading(false); // Đặt trạng thái loading thành false khi kết thúc
            }
        };

        fetchFavoriteData(); // Gọi API khi component được render
    }, []); // [] nghĩa là useEffect chỉ chạy khi component mount

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00bdd5" />
                <Text>Đang tải dữ liệu yêu thích...</Text>
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
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <View
                style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 10,
                    backgroundColor: 'white',
                }}
            >
                <View style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Favorites</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Placed you liked</Text>
            </View>

            {favoriteData.length > 0 ? (
                favoriteData.map((room) => <Item room={room.roomId} key={room._id} isFavorite={true} />)
            ) : (
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Không có dữ liệu yêu thích.</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
});
