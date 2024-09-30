import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
export default function DetailRoom({ navigation }) {
   
    const [clicked, setClicked] = React.useState(false);
    const [images, setImages] = React.useState([
        { id: 1, uri: 'https://picsum.photos/200/300' },
        { id: 2, uri: 'https://picsum.photos/201/300' },
        { id: 3, uri: 'https://picsum.photos/202/300' },
        { id: 4, uri: 'https://picsum.photos/203/300' },
        { id: 5, uri: 'https://picsum.photos/204/300' }
    ]);
    const feedbackData = [
        {
            id: 1,
            avatar: 'https://picsum.photos/200/300',
            name: 'Người gửi 1',
            time: '10 phút trước',
            rating: 4.5,
            content:
                'Nội dung phản hồi của người gửi 1.Nội dung phản hồi của người gửi 1.Nội dung phản hồi của người gửi 1.Nội dung phản hồi của người gửi 1.'
        },
        {
            id: 2,
            avatar: 'https://picsum.photos/200/300',
            name: 'Người gửi 2',
            time: '15 phút trước',
            rating: 5,
            content: 'Nội dung phản hồi của người gửi 2.'
        }
        // Thêm các feedback khác nếu cần
    ];
    const [infor, setInfor] = React.useState({
        id: 4,
        name: 'Beachfront Bungalow',
        category: 'Beach',
        price: 150,
        rating: 4.7,
        address: '218 Hai Bà Trưng, Phú Yên'
    });

    // Lấy kích thước của màn hình
    const screenWidth = Dimensions.get('window').width;

    const openGoogleMaps = (address) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    return (
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {/* img */}
                <View>
                    {/* ScrollView ngang để lướt các ảnh */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>
                        {images.map((image) => (
                            <Image
                                key={image.id}
                                source={{ uri: image.uri }}
                                style={[styles.image, { width: screenWidth }]} // Thiết lập chiều rộng của ảnh theo chiều rộng màn hình
                            />
                        ))}
                    </ScrollView>

                    {/* Nút Back */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()} // Quay lại trang trước đó
                    >
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    {/* Nút Tym */}
                    <TouchableOpacity style={styles.tym} onPress={() => setClicked(!clicked)}>
                        <AntDesign name="heart" size={24} style={{ color: clicked ? '#D91656' : 'white' }} />
                    </TouchableOpacity>
                </View>
                {/* Thông tin phòng */}
                <View style={styles.container}>
                    <Text style={styles.title}>{infor.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -4 }}>
                            <Entypo name="location-pin" size={24} style={{ color: '#3db8c7' }} />
                            <TouchableOpacity onPress={() => openGoogleMaps(infor.address)}>
                                <Text>{infor.address}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => openGoogleMaps(infor.address)}>
                            <Text style={{ fontWeight: '500', color: '#3db8c7', textDecorationLine: 'underline' }}>
                                View Map
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            backgroundColor: '#fafafa',
                            padding: 15
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <AntDesign name="star" size={15} style={{ color: '#FFD700' }} />
                            <Text style={{ marginLeft: 5 }}>{infor.rating}/5</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ marginLeft: 5 }}>262 reviews</Text>
                            <AntDesign name="right" size={20} color="black" style={{ marginLeft: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* sẻvice  */}
                <View style={{ marginTop: 2, backgroundColor: 'white', paddingHorizontal: 10 }}>
                    <Text style={{ paddingTop: 10, fontWeight: 500, fontSize: 20 }}>Facilities & Service</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.text}>2 Guests</Text>
                        <Text style={styles.text}>1 bedroom</Text>
                        <Text style={styles.text}>1 bed</Text>
                        <Text style={styles.text}>1 bath</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <MaterialIcons name="wifi" size={24} style={{ color: '#969698' }} />
                            <Text style={[styles.text, { fontSize: 15 }]}>Wifi</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <MaterialIcons name="wifi" size={24} style={{ color: '#969698' }} />
                            <Text style={[styles.text, { fontSize: 15 }]}>2 Guests</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <MaterialIcons name="wifi" size={24} style={{ color: '#969698' }} />
                            <Text style={[styles.text, { fontSize: 15 }]}>2 Guests</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <MaterialIcons name="wifi" size={24} style={{ color: '#969698' }} />
                            <Text style={[styles.text, { fontSize: 15 }]}>2 Guests</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 10,
                                padding: 10,
                                borderBlockColor: 'black',
                                borderRadius: 10,
                                borderWidth: 1
                            }}
                            // onPress={() => router.push('/components/Facilities')}
                            onPress={() => navigation.navigate('Facilities')}
                        >
                            <Text style={[styles.text, { fontSize: 20 }]}>Show All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* //review */}
                <View
                    style={{
                        marginTop: 2,
                        backgroundColor: 'white',
                        paddingHorizontal: 20,
                        paddingBottom: 20,
                        marginBottom: 1
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ paddingTop: 10, fontWeight: 500, fontSize: 20 }}>Reviews</Text>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 10,
                                padding: 15
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ marginLeft: 5, color: '##969698' }}>See all</Text>
                                <AntDesign
                                    name="right"
                                    size={20}
                                    color="black"
                                    style={{ marginLeft: 10, color: '#969698' }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <Text style={[styles.text, { fontSize: 40, color: 'black' }]}>4.5</Text>
                            <Text style={[styles.text, { fontSize: 20, color: 'black' }]}>/5</Text>
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
                        {feedbackData.map((feedback) => (
                            <View key={feedback.id} style={styles.feedbackContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                        <Image source={{ uri: feedback.avatar }} style={styles.avatar} />
                                        <View style={styles.feedbackContent}>
                                            <Text style={styles.name}>{feedback.name}</Text>
                                            <Text style={styles.time}>{feedback.time}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.rating}>⭐ {feedback.rating}</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={styles.content} numberOfLines={2}>
                                        {feedback.content}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* /policles */}
                <View style={{ marginVertical: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingBottom: 10 }}>
                    <Text style={{ paddingTop: 10, fontWeight: 500, fontSize: 20 }}>Policles</Text>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginTop: 10,
                            backgroundColor: '#fafafa',
                            borderRadius: 10,
                            padding: 5,
                            paddingLeft: 15
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <Text style={[{ fontSize: 14, fontWeight: 400 }]}>Houses rules</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <AntDesign name="clockcircleo" size={15} style={{ marginRight: 5, color: '#969698' }} />
                            <Text style={[styles.text, { fontSize: 15 }]}>Earliest check-in time:14:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                            <AntDesign name="clockcircleo" size={15} style={{ marginRight: 5, color: '#969698' }} />
                            <Text style={[styles.text, { fontSize: 15 }]}>Lastest check-out time: 12:00</Text>
                        </View>
                    </View>
                    <Text style={{ paddingTop: 10, fontWeight: 500, fontSize: 17 }}>Checkin policles</Text>
                    <Text numberOfLines={2} style={{ color: '#969698', marginVertical: 5 }}>
                        The check-in process is a critical aspect of any hospitality experience, ensuring that both the
                        guests and the establishment are on the same page before the stay begins. Whether you’re a
                        traveler heading to a hotel, resort, or vacation rental, knowing the check-in policies
                        beforehand can help streamline your arrival and set the tone for a pleasant experience. Let’s
                        explore the key components of a typical check-in policy and why each one matters.
                    </Text>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 10,
                            padding: 7,
                            borderBlockColor: 'black',
                            borderRadius: 10,
                            borderWidth: 1
                        }}
                    >
                        <Text style={[styles.text, { fontSize: 20 }]}>View More</Text>
                        <AntDesign name="right" size={20} color="black" style={{ color: '#969698' }} />
                    </TouchableOpacity>
                </View>
                {/* description */}
                <View style={{ marginVertical: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingBottom: 10 }}>
                    <Text style={{ paddingTop: 10, fontWeight: 500, fontSize: 20 }}>Description</Text>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginVertical: 10,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={{ uri: 'https://picsum.photos/200/300' }}
                            style={{ width: '100%', height: 300 }} // Width will be 100% of the container, and height will adjust accordingly
                        />
                    </View>
                    <Text numberOfLines={3} style={{ color: '#969698', marginVertical: 5 }}>
                        Experience comfort and elegance in our Cozy Deluxe Room, designed for relaxation and
                        convenience. This beautifully furnished space features a queen-sized bed with premium linens,
                        ensuring a restful night's sleep. The room is equipped with a flat-screen TV, complimentary
                        Wi-Fi, and a work desk for business or leisure needs.
                    </Text>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 10,
                            padding: 7,
                            borderBlockColor: 'black',
                            borderRadius: 10,
                            borderWidth: 1
                        }}
                    >
                        <Text style={[styles.text, { fontSize: 20 }]}>View More</Text>
                        <AntDesign name="right" size={20} color="black" style={{ color: '#969698' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 30, marginVertical: 1, backgroundColor: 'white' }}></View>
                <View
                    style={{
                        height: 100,
                        marginVertical: 1,
                        backgroundColor: 'white',
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 10, fontSize: 16 }}>From: </Text>
                        <Text style={{ paddingTop: 10, fontWeight: 500, fontSize: 16 }}>$20</Text>
                        <Text style={{ paddingTop: 10, fontSize: 16 }}>/night</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#00bdd5',
                            padding: 20,
                            width: 150,
                            borderRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 700, fontSize: 17 }}>Book now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 250, // Chiều cao của ảnh
        resizeMode: 'cover' // Đảm bảo ảnh được điều chỉnh kích thước đúng tỉ lệ
    },
    backButton: {
        position: 'absolute',
        top: 20, // Cách đỉnh ảnh
        left: 10, // Cách cạnh trái
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ phía sau nút
        borderRadius: 30,
        padding: 10
    },
    tym: {
        position: 'absolute',
        top: 20, // Cách đỉnh ảnh
        right: 10, // Cách cạnh phải
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ phía sau nút
        borderRadius: 30,
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        paddingBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    text: {
        fontSize: 10,
        paddingHorizontal: 5,
        color: '#969698'
    },
    feedbackContainer: {
        height: 150,
        width: 280,
        flexDirection: 'column',
        padding: 15, // Thêm padding cho khối feedback
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1, // Đường viền
        borderColor: '#ccc', // Màu viền
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginRight: 10 // khoảng cách giữa các feedback
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    feedbackContent: {
        flex: 1
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    time: {
        color: 'gray',
        fontSize: 12
    },
    rating: {
        color: '#FFD700', // màu vàng cho sao
        fontSize: 14
    },
    content: {
        marginTop: 5,
        fontSize: 14,
        color: '#333'
    }
});
