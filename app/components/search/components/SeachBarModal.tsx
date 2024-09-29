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
import React, { useState } from 'react';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
// Sample data
const sampleData = [
    {
        image: 'https://www.bing.com/th?id=OIP.pQ1zG3jForCJ15-5EdyMFAHaJ3&w=146&h=195&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        description: 'Anywhere'
    },
    {
        image: 'https://www.bing.com/th?id=OIP.pQ1zG3jForCJ15-5EdyMFAHaJ3&w=146&h=195&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        description: 'Europe'
    },
    {
        image: 'https://www.bing.com/th?id=OIP.pQ1zG3jForCJ15-5EdyMFAHaJ3&w=146&h=195&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
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
                                    <View style={styles.sliderItem}>
                                        <Image source={{ uri: item.image }} style={styles.sliderImage} />
                                        <Text style={styles.sliderText}>{item.description}</Text>
                                    </View>
                                )}
                            />
                        </View>

                        {/* Input Fields */}
                        <InputField label="When" placeholder="Add date" />
                        <InputField label="Guests" placeholder="Add Guests" />
                    </View>

                    {/* Clear or Search Buttons */}
                    <View style={styles.footerContainer}>
                        <SearchButton text="Clear all" icon={null} onPress={() => console.log('Clear')} />
                        <SearchButton
                            text="Search"
                            icon={<EvilIcons name="search" size={30} color="white" />}
                            onPress={() => console.log('Search')}
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
        marginTop: 160, // Fixed margin instead of percentage
        borderTopWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.2)',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        backgroundColor: 'white'
    }
});
