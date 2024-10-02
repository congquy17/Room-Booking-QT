import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
export default function Item({ room }: any) {
    const [clicked, setClicked] = React.useState(false);
    const router = useRouter();
    const navigation = useNavigation();
    // 5
    return (
        <View key={room.id} style={{ marginBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailRoom')}>
                <ImageBackground
                    style={{
                        borderRadius: 10,
                        overflow: 'hidden',
                        height: 400,
                        width: '100%'
                    }}
                    source={{ uri: room.imageUrl }}
                >
                    <TouchableOpacity onPress={() => setClicked(!clicked)}>
                        <AntDesign
                            name="hearto"
                            size={24}
                            color={clicked ? 'white' : 'black'}
                            style={{
                                backgroundColor: clicked ? 'red' : 'white',
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
    );
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    h4: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
