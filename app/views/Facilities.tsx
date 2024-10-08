import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
export default function Facilities() {
    const navigation = useNavigation();

    const Aline = ({ icon, title }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10,borderBlockColor:'#fafafa',borderTopWidth:1 }}>
                {icon}
                <Text style={[styles.text, { fontSize: 15 }]}>{title}</Text>
            </View>
        );
    };
    return (
        <ScrollView>
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
                    onPress={() => navigation.goBack()} // Quay lại trang trước đó
                >
                    <AntDesign name="left" size={20} color="black"  />
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>Facilities & Services</Text>
                </View>
            </View>
            <View style={{ marginTop: 2, backgroundColor: 'white', paddingHorizontal: 10 }}>
                <Text style={{ paddingTop: 10, fontWeight: 700, fontSize: 25 }}>Facilities</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.text}>2 Guests</Text>
                    <Text style={styles.text}>1 bedroom</Text>
                    <Text style={styles.text}>1 bed</Text>
                    <Text style={styles.text}>1 bath</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    <Aline icon={<MaterialIcons name="wifi" size={24} style={{ color: 'black' }} />} title="Wifi" />
                    <Aline
                        icon={<MaterialIcons name="kitchen" size={24} color="black" />}
                        title="Kitckchen"
                    />
                    <Aline
                        icon={<MaterialIcons name="sports-gymnastics" size={24} color="black" />}
                        title="Exercise equipment"
                    />
                    <Aline icon={<MaterialCommunityIcons name="pool" size={24} color="black" />} title="Ppool" />
                    <Aline icon={<FontAwesome name="tree" size={24} color="black" />} title="Garden" />
                </View>
            </View>
            <View style={{ marginTop: 2, backgroundColor: 'white', paddingHorizontal: 10 }}>
                <Text style={{ paddingTop: 10, fontWeight: 700, fontSize: 25 }}>Facilities</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{fontSize:15,fontWeight:600}}>Cleaning & luandry</Text>
                    
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    <Aline icon={<MaterialIcons name="wifi" size={24} style={{ color: 'black' }} />} title="Wifi" />
                    <Aline
                        icon={<MaterialIcons name="kitchen" size={24} color="black" />}
                        title="Kitckchen"
                    />
                    <Aline
                        icon={<MaterialIcons name="sports-gymnastics" size={24} color="black" />}
                        title="Exercise equipment"
                    />
                    <Aline icon={<MaterialCommunityIcons name="pool" size={24} color="black" />} title="Ppool" />
                    <Aline icon={<FontAwesome name="tree" size={24} color="black" />} title="Garden" />
                </View>
            </View>
            <View style={{ marginTop: 2, backgroundColor: 'white', paddingHorizontal: 10 }}>
                <Text style={{ paddingTop: 10, fontWeight: 700, fontSize: 25 }}>Facilities</Text>
               
                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    <Aline icon={<MaterialIcons name="wifi" size={24} style={{ color: 'black' }} />} title="Wifi" />
                    <Aline
                        icon={<MaterialIcons name="kitchen" size={24} color="black" />}
                        title="Kitckchen"
                    />
                   
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 6, // Cách đỉnh ảnh
        left: 10, // Cách cạnh trái
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
    }
});
