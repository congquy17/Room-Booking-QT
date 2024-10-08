import React from 'react';
import { View, Text, Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const ItemReview = ({ item }) => {
    return (
        <View
            style={{
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 15,
                marginVertical: 10,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.1,
                shadowRadius: 3.5,
                elevation: 5
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10
                }}
            >
                <Image
                    source={{ uri: item?.avatar }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 10
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16
                        }}
                    >
                        {item?.name}
                    </Text>
                    <Text
                        style={{
                            color: '#888',
                            fontSize: 12
                        }}
                    >
                        {item?.date}
                    </Text>
                </View>
                <StarRating
                    rating={item?.rating}
                    starSize={20}
                    color={'#FFD700'} // Gold color for the stars
                    style={{ marginTop: 5 }}
                    onChange={() => {}}
                />
            </View>
            <Text
                style={{
                    marginVertical: 5,
                    fontSize: 14,
                    color: '#333'
                }}
            >
                {item?.text}
            </Text>
        </View>
    );
};

export default ItemReview;
