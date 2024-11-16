import {
    Dimensions,
    FlatList,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useContext, useState } from 'react';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate } from 'date-fns';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import AppContext from '@/app/store/context/AppContext';
// Sample data
const sampleData = [
    {
        image: 'https://www.bing.com/th?id=OIP.pQ1zG3jForCJ15-5EdyMFAHaJ3&w=146&h=195&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        description: 'Anywhere'
    },
    {
        image: 'data:image/jpeg;base64,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',
        description: 'Europe'
    },
    {
        image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-dep-thien-nhien-2-1.jpg',
        description: 'Asia'
    }
];

// Search Button Component
const SearchButton = ({ text, icon, onPress, backgroundColor, color }: any) => (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor }]} onPress={onPress}>
        {icon}
        <Text style={[styles.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
);

// Input Field Component
const InputField = ({ label, placeholder, onPress }: any) => (
    <View style={styles.inputContainer}>
        <Text>{label}</Text>
        <TouchableOpacity style={{ paddingVertical: 4 }} onPress={onPress}>
            <Text style={styles.h5}>{placeholder}</Text>
        </TouchableOpacity>
    </View>
);

export default function SeachBarModal({ modalVisible, setModalVisible }: any) {
    const [searchRooms, setSearchRooms] = useState(sampleData);
    const [openDate, setOpenDate] = useState(false);

    const [toggleLocaltion, setToggleLocaltion] = useState(false);
    const [showGuests, setShowGuests] = useState(false); // Trạng thái để kiểm soát hiển thị
    const [adults, setAdults] = useState(0); // Số lượng người lớn
    const [children, setChildren] = useState(0); // Số lượng trẻ em
    const [placeholder, setPlaceholder] = useState('Add Guests'); // Placeholder ban đầu
    const navigation = useNavigation();
    const { localtion, setLocaltion, quantityCustomer, setQuantityCustomer, dateStart, setDateStart } =
        useContext(AppContext);

    const toggleGuests = () => {
        setShowGuests((prev) => !prev); // Chuyển đổi trạng thái hiển thị
    };

    // Hàm tăng số lượng người lớn
    const increaseAdults = () => {
        setAdults((prev) => prev + 1);
    };

    // Hàm giảm số lượng người lớn
    const decreaseAdults = () => {
        if (adults > 1) {
            // Đảm bảo số lượng người lớn không giảm dưới 1
            setAdults((prev) => prev - 1);
        }
    };

    // Hàm tăng số lượng trẻ em
    const increaseChildren = () => {
        setChildren((prev) => prev + 1);
    };

    // Hàm giảm số lượng trẻ em
    const decreaseChildren = () => {
        if (children > 1) {
            // Đảm bảo số lượng trẻ em không giảm dưới 1
            setChildren((prev) => prev - 1);
        }
    };
    const handleChoose = () => {
        // Cập nhật placeholder với số lượng khách
        setPlaceholder(`${adults} Guests, ${children} Children`);
        setQuantityCustomer(`${adults} Guests, ${children} Children`); // Cập nhật số lượng khách
        setShowGuests(false); // Đóng modal khi đã chọn
    };
    //  Time
    const [selectedStartDated, setSelectedStartDated] = useState('Add date');
    const hideDatePicker = () => {
        setOpenDate(false);
    };

    const handleConfirm = (date) => {
        setSelectedStartDated(formatDate(date, 'dd/MM/yyyy'));
        setDateStart(formatDate(date, 'dd/MM/yyyy'));
        hideDatePicker();
    };
    return (
        <Modal transparent={true} visible={modalVisible} animationType="fade">
            <View style={styles.modalContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={styles.contentContainer}>
                        <Text style={styles.h2}>Where to?</Text>

                        {/* InputText */}
                        <View style={styles.searchInput}>
                            <EvilIcons name="search" size={30} color="black" />
                            <TextInput style={styles.textInput} placeholder="Where do you want to stay?" />
                        </View>

                        {/* Slider */}
                        <View style={styles.sliderContainer}>
                            <FlatList
                                data={searchRooms}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.description}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.sliderItem}
                                        onPress={() => {
                                            setLocaltion(item.description);
                                            if (!localtion) {
                                                setToggleLocaltion(false);
                                            } else setToggleLocaltion(true);
                                        }}
                                    >
                                        <Image source={{ uri: item.image }} style={styles.sliderImage} />
                                        <Text style={styles.sliderText}>{item.description}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        {toggleLocaltion ? <InputField label="Location" placeholder={localtion} /> : null}

                        {/* Input Fields */}
                        <InputField
                            label="When"
                            placeholder={openDate ? selectedStartDated : selectedStartDated}
                            onPress={() => {
                                setOpenDate(!openDate);
                            }}
                        />
                        <View>
                            <DateTimePickerModal
                                isVisible={openDate}
                                mode="date"
                                onChange={handleConfirm}
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                        <InputField label="Guests" placeholder={placeholder} onPress={toggleGuests} />
                        {showGuests ? (
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    borderColor: '#00000030',
                                    paddingVertical: 20,
                                    marginTop: 20,
                                    marginBottom: 20
                                }}
                            >
                                <Text style={{ paddingHorizontal: 20, fontSize: 26, fontWeight: 800 }}>
                                    How Many Guests?
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 20,
                                        paddingVertical: 20,
                                        borderBottomWidth: 1,
                                        borderColor: '#00000030'
                                    }}
                                >
                                    <Text>Adults</Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <TouchableOpacity onPress={decreaseAdults}>
                                            <AntDesign name="minuscircleo" size={27} color="#000000a6" />
                                        </TouchableOpacity>

                                        <Text style={{ paddingHorizontal: 5 }}>{adults}</Text>
                                        <TouchableOpacity onPress={increaseAdults}>
                                            <AntDesign name="pluscircleo" size={27} color="#000000a6" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 20,
                                        paddingTop: 20
                                    }}
                                >
                                    <Text>Children</Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <TouchableOpacity onPress={decreaseChildren}>
                                            <AntDesign name="minuscircleo" size={27} color="#000000a6" />
                                        </TouchableOpacity>

                                        <Text style={{ paddingHorizontal: 5 }}>{children}</Text>
                                        <TouchableOpacity onPress={increaseChildren}>
                                            <AntDesign name="pluscircleo" size={27} color="#000000a6" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Button
                                        onPress={handleChoose}
                                        title="Chose"
                                        backgroundColor="black"
                                        textColor="white"
                                        size="small"
                                    />
                                </View>
                            </View>
                        ) : null}
                    </View>

                    {/* Clear or Search Buttons */}
                    <View style={styles.footerContainer}>
                        <SearchButton text="Clear all" icon={null} onPress={() => console.log('Clear')} />
                        <SearchButton
                            text="Search"
                            icon={<EvilIcons name="search" size={30} color="white" />}
                            onPress={() => {
                                navigation.navigate('SearchRoom'), setModalVisible(false);
                            }}
                            backgroundColor="#00bad5"
                            color="white"
                        />
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        padding: 10
    },
    contentContainer: {
        width: 320, // Fixed width instead of percentage
        paddingTop: 60 // Fixed padding value
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    h5: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    searchInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        borderRadius: 10,
        width: 320, // Fixed width instead of percentage
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    textInput: {
        width: 240, // Adjusted width to fit within the input
        height: '100%'
    },
    sliderContainer: {
        marginVertical: 15
    },
    sliderItem: {
        borderRadius: 8,
        height: 150,
        width: 120, // Fixed width for each slider item
        marginHorizontal: 10
    },
    sliderImage: {
        width: '100%',
        height: '80%'
    },
    sliderText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        borderRadius: 10,
        width: 320 // Fixed width for the input container
    },
    buttonContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#00bad5',
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        marginLeft: 5
    },
    footerContainer: {
        // position: 'absolute',
        // bottom: 0,
        marginTop: 140,
        borderTopWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.2)',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        backgroundColor: 'white'
    }
});
