import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Booking() {
    // Sử dụng React.useState để lưu thông tin đặt chỗ
    const [infor, setInfor] = React.useState({
        ref: 4,
        date: '2024-09-28',
        time: '15:30',
        paymentmethod: 'Credit Card',
        amount: 30,
    });

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Booking Information</Text>

            <View style={styles.bookingItem}>
                <View style={styles.bookingDetails}>
                    <Text style={styles.label}>Reference Number:</Text>
                    <Text style={styles.value}>{infor.ref}</Text>

                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.value}>{infor.date}</Text>

                    <Text style={styles.label}>Time:</Text>
                    <Text style={styles.value}>{infor.time}</Text>

                    <Text style={styles.label}>Payment Method:</Text>
                    <Text style={styles.value}>{infor.paymentmethod}</Text>

                    <Text style={styles.label}>Amount:</Text>
                    <Text style={styles.value}>${infor.amount}</Text>
                </View>

                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.buttonText}>Confirm Booking</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 10,
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
