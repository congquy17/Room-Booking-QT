import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { RadioButton } from 'react-native-paper';
export default function ComfirmAndPay() {
    const navigation = useNavigation();
    const [infor, setInfor] = React.useState({
        id: 4,
        name: 'Beachfront Bungalow',
        category: 'Beach',
        price: 150,
        rating: 4.7,
        address: '218 Hai Bà Trưng, Phú Yên',
        mainImage: 'https://picsum.photos/200/300'
    });
    const [selectedOption, setSelectedOption] = useState('full');
    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <View
                style={{
                    padding: 10,
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
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Comfirm And Pay</Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 2,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 1, // This applies to all borders
                    padding: 10,
                    borderRadius: 10,
                    borderColor: '#D8D2C2' // Use borderColor instead of borderBlockColor
                }}
            >
                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: '700', fontSize: 20 }}>{infor.price}$</Text>
                        <Text style={{ fontSize: 20 }}>/night</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15 }}>{infor.name}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <AntDesign name="star" size={15} style={{ color: '#FFD700' }} />
                        <Text style={{ marginLeft: 5 }}>{infor.rating}</Text>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: infor.mainImage }} style={{ width: 130, height: 130, borderRadius: 10 }} />
                </View>
            </View>
            <View
                style={{
                    marginTop: 2,
                    backgroundColor: 'white',
                    padding: 10
                }}
            >
                <Text style={{ paddingVertical: 10, fontWeight: '700', fontSize: 25 }}>Your trip</Text>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Dates</Text>
                    <Text style={{ fontSize: 16, color: '#D8D2C2' }}>May 1-6</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Guests</Text>
                    <Text style={{ fontSize: 16, color: '#D8D2C2' }}>2 guests</Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 2,
                    backgroundColor: 'white',
                    padding: 10
                }}
            >
                <Text style={{ paddingVertical: 10, fontWeight: '700', fontSize: 25 }}>Payment options</Text>
                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flex: 7 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Pay in full</Text>
                        <Text style={{ fontSize: 16, color: '#D8D2C2' }}>Pay 30$ now to finalize your booking</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <RadioButton
                            value="full"
                            status={selectedOption === 'full' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedOption('full')}
                        />
                    </View>
                </View>

                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flex: 7 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Pay a partial amount now</Text>
                        <Text style={{ fontSize: 16, color: '#D8D2C2' }}>
                            You can make a partial payment now and the remaining amount at a later time
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <RadioButton
                            value="partial"
                            status={selectedOption === 'partial' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedOption('partial')}
                        />
                    </View>
                </View>
            </View>

            <View
                style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    borderBlockEndColor: '#D8D2C2',
                    borderBottomWidth: 1
                }}
            >
                <Text style={{ paddingVertical: 10, fontWeight: '700', fontSize: 25 }}>Price detail</Text>
                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flex: 7 }}>
                        <Text style={{ fontSize: 16, color: '#D8D2C2' }}>$20 x 1 night</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '600' }}>$20</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flex: 7 }}>
                        <Text style={{ fontSize: 16, color: '#D8D2C2' }}>$20 x 1 night</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '600' }}>$20</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flex: 7 }}>
                        <Text style={{ fontSize: 16, color: '#D8D2C2' }}>$20 x 1 night</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '600' }}>$20</Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    paddingBottom:60,
                    paddingHorizontal: 10,
                }}
            >
                <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 16, color: '#D8D2C2' }}>$20 x 1 night</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '600' }}>$60</Text>
                </View>
            </View>
            <View
                style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom:30,
                    paddingHorizontal: 10,
                    borderTopColor:'#D8D2C2',
                    borderTopWidth:1,
                    paddingTop:10
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#00bdd5',
                        padding: 10,
                        borderRadius: 10,
                        width: '100%',
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate('Successfully')} // Go back to the previous screen
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>Book now</Text>
                </TouchableOpacity>
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
    ratingContainer: {
        padding: 10,
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderColor: '#fafafa',
        flex: 2 // Allow to take available space,
    },
    ratingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    ratingDistributionContainer: {
        padding: 10,
        flex: 3 // Allow to take more space than ratingContainer
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center'
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
