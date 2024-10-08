import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image from '../assets/R.png';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Successfully() {
    const navigation = useNavigation();
    const [infor, setInfor] = React.useState({
        ref: 4,
        date: 'Beachfront Bungalow',
        time: 'Beach',
        paymentmethod: 'Credit cash',
        amount: 30
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <Image source={image} style={styles.image} />
                <Text style={styles.successText}>Payment success!</Text>
                <View style={styles.infoContainer}>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5
                        }}
                    >
                        <Text style={styles.infoText}>Ref number</Text>
                        <Text style={[styles.infoText, { fontWeight: 500 }]}>{infor.ref}</Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5
                        }}
                    >
                        <Text style={styles.infoText}>Date</Text>
                        <Text style={[styles.infoText, { fontWeight: 500 }]}>{infor.date}</Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5
                        }}
                    >
                        <Text style={styles.infoText}>Time</Text>
                        <Text style={[styles.infoText, { fontWeight: 500 }]}>{infor.time}</Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5,
                            borderBlockColor: '#fafafa',
                            borderBottomWidth: 2
                        }}
                    >
                        <Text style={styles.infoText}>Payment method</Text>
                        <Text style={[styles.infoText, { fontWeight: 500 }]}>{infor.paymentmethod}</Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 5
                        }}
                    >
                        <Text style={styles.infoText}>Amount</Text>
                        <Text style={[styles.infoText, { fontWeight: 600 }]}>${infor.amount}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        padding: 10,
                        borderRadius: 10,
                        width: '100%',
                        marginTop: 20,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderBlockColor: 'gray',
                        borderWidth: 1
                    }}
                >
                    <AntDesign name="download" size={24} color="gray" />
                    <Text style={{ fontSize: 20, marginLeft: 10, color: 'gray' }}>Get PDF receipt</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#00bdd5',
                    padding: 10,
                    borderRadius: 10,
                    width: '100%',
                    position: 'absolute',
                    bottom: 20,
                    alignItems: 'center'
                }}
                onPress={() =>
                    navigation.navigate('Main',{
                        screen: 'Bookings'
                    })
                } // Go back to the previous screen
            >
                <Text style={{ fontSize: 20, color: 'white' }}>View booking</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        padding: 10
    },
    content: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    image: {
        position: 'absolute',
        top: -70,
        width: 100,
        height: 100,
        marginTop: 20
    },
    successText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    infoContainer: {
        marginTop: 20,
        width: '100%'
    },
    infoText: {
        fontSize: 16,
        textAlign: 'center'
    }
});
