import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Item from '../beach/Item'; // Component Item dùng để hiển thị mỗi phòng
import API_Mobile from '../../../util/constan'; // Đảm bảo rằng API_Mobile chứa URL đúng cho API
import { useSelector } from 'react-redux';

export default function Mountain() {
    const [rooms, setRooms] = useState<{ _id: string; [key: string]: any }[]>([]); // State để lưu dữ liệu phòng
    const [loading, setLoading] = useState(true); // State để theo dõi quá trình tải dữ liệu
    const [error, setError] = useState(null); // State để lưu thông tin lỗi nếu có
    const { user } = useSelector((state: any) => state.auth);
    useEffect(() => {
        // Hàm gọi API để lấy dữ liệu phòng
        const fetchRooms = async () => {
            try {
                const response = await fetch(`${API_Mobile}/rooms/type/Mountain/${user._id}`);
                const data = await response.json();

                if (response.ok) {
                    setRooms(data); // Lưu dữ liệu trả về vào state
                } else {
                    setError(data.message); // Xử lý lỗi nếu có
                }
            } catch (error) {
                setError('Lỗi kết nối đến API'); // Xử lý lỗi kết nối
            } finally {
                setLoading(false); // Hoàn tất việc tải
            }
        };

        fetchRooms(); // Gọi API khi component mount
    }, []); // Chạy một lần khi component được render

    if (loading) {
        // Hiển thị Loading Indicator khi dữ liệu đang được tải
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00bdd5" />
                <Text>Đang tải dữ liệu...</Text>
            </View>
        );
    }

    if (error) {
        // Hiển thị thông báo lỗi nếu có
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {rooms.map((room) => (
                <Item key={room._id} room={room} /> // Hiển thị mỗi phòng với component Item
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
        padding: 10 // Thêm padding để không gian đẹp hơn
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8d7da',
        padding: 20
    },
    errorText: {
        color: '#721c24',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
