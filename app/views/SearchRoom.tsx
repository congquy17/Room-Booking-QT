import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Item from '../components/search/beach/Item';
import SearchBar from '../components/search/search-bar/SearchBar';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

// Dữ liệu giả lập bên ngoài component
// findall
const roomData = [
    {
        id: 1,
        name: 'Room with Ocean View',
        category: 'Beach',
        price: 120,
        rating: 4.8,
        imageUrl: 'https://th.bing.com/th/id/OIP.UfnkmLgG_dbPOEsZJ0G5VgAAAA?rs=1&pid=ImgDetMain'
    },
    {
        id: 2,
        name: 'Cozy Beach House',
        category: 'Beach',
        price: 100,
        rating: 4.5,
        imageUrl: 'https://th.bing.com/th/id/OIP.OnwkSJ55-36ycyNvYBrbeAAAAA?w=474&h=663&rs=1&pid=ImgDetMain'
    },
    {
        id: 3,
        name: 'Luxury Villa',
        category: 'Beach',
        price: 300,
        rating: 5.0,
        imageUrl: 'https://i.pinimg.com/originals/9e/fa/64/9efa64a6e484af14d04bacb6f8dc10e5.jpg'
    },
    {
        id: 4,
        name: 'Beachfront Bungalow',
        category: 'Beach',
        price: 150,
        rating: 4.7,
        imageUrl: 'https://th.bing.com/th/id/OIP.IwOfp5jFS1c9stsJjDrj0wAAAA?w=300&h=400&rs=1&pid=ImgDetMain'
    },
    {
        id: 5,
        name: 'Private Beach Cabin',
        category: 'Beach',
        price: 80,
        rating: 4.3,
        imageUrl: 'https://th.bing.com/th/id/OIP.uQA5YTyGfFiELv1CS2gA4gHaGj?w=1200&h=1061&rs=1&pid=ImgDetMain'
    }
];
export default function SearchRoom() {
    const [rooms, setRooms] = React.useState(roomData);
    const [clicked, setClicked] = React.useState(false);
    const router = useRouter();
    const navigation = useNavigation();
    const [isCheckBox, setIsCheckBox] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [value, setValue] = useState(0);
    const checkBoxTax = () => {
        setIsCheckBox(!isCheckBox);
    };
    const toggleLike = (roomId) => {
        setRooms(rooms.map((room) => (room.id === roomId ? { ...room, liked: !room.liked } : room)));
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <SearchBar />
                <View
                    style={{ marginTop: 30, padding: 10, borderWidth: 1, borderColor: '#f7ececc2', borderRadius: 10 }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>Present total price</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>All-inclusive, pre-tax</Text>
                        <TouchableOpacity onPress={checkBoxTax}>
                            <AntDesign name="checksquare" size={24} color={isCheckBox ? '#0392af' : 'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
                {rooms.map((room) => (
                    <View key={room.id} style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <ImageBackground
                                style={{
                                    borderRadius: 10,
                                    overflow: 'hidden',
                                    height: 400,
                                    width: '100%'
                                }}
                                source={{ uri: room.imageUrl }}
                            >
                                <TouchableOpacity onPress={() => toggleLike(room.id)}>
                                    <AntDesign
                                        name={room.liked ? 'heart' : 'hearto'}
                                        size={24}
                                        color={room.liked ? 'white' : 'black'}
                                        style={{
                                            backgroundColor: room.liked ? 'red' : 'white',
                                            position: 'absolute',
                                            padding: 10,
                                            top: 10,
                                            right: 10,
                                            borderRadius: 100
                                        }}
                                    />
                                </TouchableOpacity>
                            </ImageBackground>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingTop: 10
                                }}
                            >
                                <View>
                                    <Text style={styles.h3}>{room.name}</Text>
                                    <Text style={{ marginTop: 5 }}>{room.category}</Text>
                                </View>
                                <View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <AntDesign name="star" size={20} color="#eccd60" />
                                        <Text>{room.rating}</Text>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text>${room.price}/night</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            {/* Modal */}
            <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View
                            style={[styles.modalHeader, { borderBottomWidth: 1, padding: 10, borderColor: '#d9d9d9' }]}
                        >
                            <Text style={styles.modalTitle}>Filters</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.sectionTitle}>Price range</Text>
                        <View style={styles.priceRange}>
                            <Text>US$10</Text>
                            <Text>—</Text>
                            <Text>US$250</Text>
                        </View>

                        <Text style={styles.sectionTitle}>Type of place</Text>
                        <View style={styles.typeOfPlace}>
                            <TouchableOpacity style={styles.checkBoxRow}>
                                <Text style={{ fontSize: 18, fontWeight: 500 }}>Entire place</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12 }}>Entire apartment, condos, house</Text>
                                    <AntDesign name="checksquare" size={24} color="#0392af" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.checkBoxRow}>
                                <Text style={{ fontSize: 18, fontWeight: 500 }}>Private Room</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12 }}>Entire apartment, condos, house</Text>
                                    <AntDesign name="checksquare" size={24} color="#0392af" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.checkBoxRow}>
                                <Text style={{ fontSize: 18, fontWeight: 500 }}>Dormitories</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12 }}>Entire apartment, condos, house</Text>
                                    <AntDesign name="checksquare" size={24} color="#0392af" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                marginTop: 50,
                                borderTopColor: '#f7ececc2',
                                borderTopWidth: 1,
                                paddingTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <TouchableOpacity style={styles.clearButton}>
                                <Text style={{ color: 'red' }}>Clear all</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.resultsButton} onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'white' }}>View Results</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    imageBackground: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 400,
        width: '100%'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    modalContainer: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 10
    },
    priceRange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    typeOfPlace: {
        marginTop: 10
    },
    checkBoxRow: {},
    clearButton: {
        alignItems: 'center',
        marginVertical: 10
    },
    resultsButton: {
        backgroundColor: '#0392af',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    }
});
