import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchBar from '../components/search/search-bar/SearchBar';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import AppContext from '../store/context/AppContext';
import API_Mobile from '../util/constan';
// Dữ liệu giả lập bên ngoài component
// findall
const roomData = [
    {
        id: 1,
        name: 'Room with Ocean View',
        category: 'Beach',
        price: 120,
        rating: 4.8,
        type: 'Entire place',
        imageUrl: 'https://th.bing.com/th/id/OIP.UfnkmLgG_dbPOEsZJ0G5VgAAAA?rs=1&pid=ImgDetMain'
    }
];
export default function SearchRoom() {
    const [rooms, setRooms] = React.useState([]);
    const router = useRouter();
    const navigation = useNavigation();
    const [isCheckBox, setIsCheckBox] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [priceRange, setPriceRange] = useState([10, 250]);
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);
    const [debouncedLocation, setDebouncedLocation] = useState('');
    // chọn option
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const { localtion, setLocaltion, quantityCustomer, setQuantityCustomer, dateStart, setDateStart } =
        useContext(AppContext);

    // Function to handle checkbox selection
    const handleSelection = (option: string) => {
        if (selectedOptions.includes(option)) {
            // If option is already selected, deselect it by removing it from the array
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            // If option is not selected, add it to the array
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const checkBoxTax = () => {
        setIsCheckBox(!isCheckBox);
    };
    const fetchRooms = async () => {
        try {
            const url = `${API_Mobile}/rooms/search/area-price-range?typeArea=${localtion}&prePrice=${priceRange[0]}&postPrice=${priceRange[1]}`;
            console.log('Fetching URL:', url); // Log URL

            const response = await fetch(url);

            if (!response.ok) {
                if (response.status === 404) {
                    console.log('API endpoint not found. Please verify the URL.');
                } else {
                    console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
                }
                setRooms([]); // Đảm bảo không crash app
                return;
            }

            const result = await response.json();
            console.log('API response:', result);

            if (Array.isArray(result.data)) {
                setRooms(result.data);
            } else {
                console.error('Expected data array, but got:', result.data);
                setRooms([]);
            }
        } catch (error) {
            console.error('Error fetching room data:', error);
            setRooms([]); // Fallback khi có lỗi
        }
    };
    // Gọi hàm fetchRooms khi dependencies thay đổi
    useEffect(() => {
        fetchRooms();
    }, [localtion, priceRange]);
    // Toggle like status for a specific room
    const toggleLike = (roomId: number) => {
        setRooms((prevRooms) => prevRooms.map((room) => (room.id === roomId ? { ...room, liked: !room.liked } : room)));
    };

    const handleSliderChange = (values: number[]) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            setPriceRange(values);
        }, 400); // Đợi 0.4 giây sau khi người dùng dừng kéo
    };
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedLocation(localtion); // Cập nhật giá trị sau 0.3 giây
        }, 600);

        return () => {
            clearTimeout(handler); // Xoá timeout nếu người dùng tiếp tục nhập
        };
    }, [localtion]);
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <SearchBar /> */}
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(128, 128, 128, 0.5)',
                        flexDirection: 'row',
                        alignItems: 'center',

                        borderRadius: 10
                    }}
                >
                    <TouchableOpacity style={{ padding: 2 }} onPress={() => setModalVisible(true)}>
                        <Octicons style={{ marginLeft: 15 }} name="search" size={24} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        style={{ marginLeft: 10, width: '80%', backgroundColor: 'white' }}
                        placeholder={
                            debouncedLocation
                                ? `${debouncedLocation}+${quantityCustomer}+${dateStart}`
                                : 'Where do you want to stay?'
                        }
                        onChangeText={(text) => setLocaltion(text)}
                    />
                </View>
                <View
                    style={{
                        marginTop: 30,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#f7ececc2',
                        borderRadius: 10
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>Present total price</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>All-inclusive, pre-tax</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(true), checkBoxTax;
                            }}
                        >
                            <AntDesign name="checksquare" size={24} color={isCheckBox ? '#0392af' : 'black'} />
                        </TouchableOpacity>
                    </View>
                </View>

                {rooms && rooms.length ? (
                    rooms.map((room) => (
                        <View key={room._id} style={{ marginVertical: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false), navigation.navigate('DetailRoom', { roomId: room.id });
                                }}
                            >
                                <ImageBackground
                                    style={{
                                        borderRadius: 10,
                                        overflow: 'hidden',
                                        height: 400,
                                        width: '100%'
                                    }}
                                    source={{
                                        uri:
                                            room.listImage && room.listImage[0]
                                                ? room.listImage[0]
                                                : 'https://th.bing.com/th/id/OIP.UfnkmLgG_dbPOEsZJ0G5VgAAAA?rs=1&pid=ImgDetMain'
                                    }} // Kiểm tra nếu có hình ảnh
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
                                        <Text style={{ marginTop: 5 }}>{room.typeArea}</Text>
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
                    ))
                ) : (
                    <Text>Không có dữ liệu</Text>
                )}
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
                            <View style={{ width: '100%' }}>
                                <MultiSlider
                                    values={[priceRange[0], priceRange[1]]} // Giá trị hiện tại của thanh kéo
                                    min={10} // Giá trị tối thiểu
                                    max={250} // Giá trị tối đa
                                    onValuesChange={(values) => handleSliderChange(values)} // Cập nhật giá trị khi kéo thanh
                                    selectedStyle={{
                                        backgroundColor: '#0392af' // Màu của phần đã chọn
                                    }}
                                    unselectedStyle={{
                                        backgroundColor: '#cccccc' // Màu của phần chưa chọn
                                    }}
                                    trackStyle={{
                                        height: 10 // Độ dày của thanh kéo
                                    }}
                                    markerStyle={{
                                        height: 20,
                                        width: 20,
                                        backgroundColor: '#0392af' // Màu nút kéo
                                    }}
                                    containerStyle={{ alignItems: 'center', padding: 0, margin: 0, width: '100%' }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <View
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            borderBlockColor: 'grays',
                                            padding: 10
                                        }}
                                    >
                                        <Text>Minimun</Text>
                                        <Text>US${priceRange[0]}</Text>
                                    </View>
                                    <Text>--</Text>
                                    <View
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            borderBlockColor: 'grays',
                                            padding: 10
                                        }}
                                    >
                                        <Text>Maximun</Text>
                                        <Text>US${priceRange[1]}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.sectionTitle}>Type of place</Text>
                        <View style={styles.typeOfPlace}>
                            <TouchableOpacity
                                style={styles.checkBoxRow}
                                onPress={() => handleSelection('Entire place')}
                            >
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Entire place</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12 }}>Entire apartment, condos, house</Text>
                                    <AntDesign
                                        name="checksquare"
                                        size={24}
                                        color={selectedOptions.includes('Entire place') ? '#0392af' : '#ccc'}
                                    />
                                </View>
                            </TouchableOpacity>

                            {/* Private Room */}
                            <TouchableOpacity
                                style={styles.checkBoxRow}
                                onPress={() => handleSelection('Private Room')}
                            >
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Private Room</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12 }}>Entire apartment, condos, house</Text>
                                    <AntDesign
                                        name="checksquare"
                                        size={24}
                                        color={selectedOptions.includes('Private Room') ? '#0392af' : '#ccc'}
                                    />
                                </View>
                            </TouchableOpacity>

                            {/* Dormitories */}
                            <TouchableOpacity style={styles.checkBoxRow} onPress={() => handleSelection('Dormitories')}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Dormitories</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12 }}>Entire apartment, condos, house</Text>
                                    <AntDesign
                                        name="checksquare"
                                        size={24}
                                        color={selectedOptions.includes('Dormitories') ? '#0392af' : '#ccc'}
                                    />
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
                            <TouchableOpacity
                                style={styles.resultsButton}
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
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
        height: '80%',
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
        fontSize: 20,
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
    checkBoxRow: {
        marginBottom: 10
    },
    clearButton: {
        alignItems: 'center',
        padding: 10
    },
    resultsButton: {
        backgroundColor: '#0392af',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    }
});
