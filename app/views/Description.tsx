import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import ItemReview from '../components/ItemReview';
import { Entypo } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Description() {
    const navigation = useNavigation();
    const openGoogleMaps = (address) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };
    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 10,
                    backgroundColor: 'white'
                }}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()} // Go back to the previous screen
                >
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Description</Text>
                </View>
            </View>

            <View style={{ marginVertical: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingBottom: 10 }}>
                <View
                    style={{
                        flexDirection: 'column',
                        marginVertical: 10,
                        borderRadius: 10
                    }}
                >
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300' }}
                        style={{ width: '100%', height: 300, borderRadius: 10 }} // Width will be 100% of the container, and height will adjust accordingly
                    />
                </View>
                <Text style={{ color: '#969698', marginVertical: 5 }}>
                    Experience comfort and elegance in our Cozy Deluxe Room, designed for relaxation and convenience.
                    This beautifully furnished space features a queen-sized bed with premium linens, ensuring a restful
                    night's sleep. The room is equipped with a flat-screen TV, complimentary Wi-Fi, and a work desk for
                    business or leisure needs.
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -4 }}>
                    <Entypo name="location-pin" size={24} style={{ color: '#3db8c7' }} />
                    <TouchableOpacity onPress={() => openGoogleMaps('218 Hai Bà Trưng, Phú Yên')}>
                        <Text>218 Hai Bà Trưng, Phú Yên</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => openGoogleMaps('218 Hai Bà Trưng, Phú Yên')}>
                    <Text style={{ fontWeight: '500', color: '#3db8c7', textDecorationLine: 'underline' }}>
                        View Map
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="done" size={24} color="black" />
                    <Text style={{marginLeft:15}}>Experience comfort and elegance</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="done" size={24} color="black" />
                    <Text style={{marginLeft:15}}>Experience comfort and elegance</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="done" size={24} color="black" />
                    <Text style={{marginLeft:15}}>Experience comfort and elegance</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 6, // Distance from top
        left: 0, // Distance from left
        borderRadius: 30,
        padding: 10
    },
    barContainer: {
        flex: 1,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        overflow: 'hidden',
        marginHorizontal: 5
    },
    ratingBar: {
        height: '100%',
        backgroundColor: '#FFB74D' // Color for filled bar
    },
    remainingBar: {
        height: '100%',
        backgroundColor: '#f0f0f0' // Color for remaining part
    },
    countText: {
        marginLeft: 5,
        fontSize: 16
    }
});
