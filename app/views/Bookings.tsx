import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Booking() {
    // Thêm một mảng chứa nhiều thông tin đặt chỗ
    const [bookings, setBookings] = React.useState([
        {
            ref: 1,
            date: '2024-09-28',
            time: '15:30',
            paymentmethod: 'Credit Card',
            amount: 30,
            status: 'Chưa đến', // 'Đã qua' hoặc 'Chưa đến'
        },
        {
            ref: 2,
            date: '2024-10-01',
            time: '12:00',
            paymentmethod: 'PayPal',
            amount: 50,
            status: 'Chưa đến',
        },
        {
            ref: 3,
            date: '2024-08-15',
            time: '10:00',
            paymentmethod: 'Debit Card',
            amount: 20,
            status: 'Đã qua',
        },
        // Thêm nhiều thông tin đặt chỗ khác nếu cần
    ]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Booking Information</Text>

            {bookings.map((booking, index) => (
                <View key={index} style={styles.bookingItem}>
                    <View style={styles.bookingDetails}>
                        <Text style={styles.label}>Reference Number:</Text>
                        <Text style={styles.value}>{booking.ref}</Text>

                        <Text style={styles.label}>Date:</Text>
                        <Text style={styles.value}>{booking.date}</Text>

                        <Text style={styles.label}>Time:</Text>
                        <Text style={styles.value}>{booking.time}</Text>

                        <Text style={styles.label}>Payment Method:</Text>
                        <Text style={styles.value}>{booking.paymentmethod}</Text>

                        <Text style={styles.label}>Amount:</Text>
                        <Text style={styles.value}>${booking.amount}</Text>

                        {/* Hiển thị trạng thái */}
                        <Text style={styles.label}>Status:</Text>
                        <Text style={[styles.value, booking.status === 'Đã qua' ? styles.passed : styles.upcoming]}>
                            {booking.status}
                        </Text>
                    </View>

                    
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginBottom: 60,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    bookingItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    bookingDetails: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    passed: {
        color: 'red', // Màu đỏ cho trạng thái 'Đã qua'
    },
    upcoming: {
        color: 'green', // Màu xanh cho trạng thái 'Chưa đến'
    },
    confirmButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
