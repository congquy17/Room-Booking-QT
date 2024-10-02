import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import ItemReview from '../components/ItemReview';

export default function Review() {
    const navigation = useNavigation();
    const [rating, setRating] = useState(4.5); // Default rating
    const ratings = [
        { stars: 5, count: 120 }, // 5-star ratings
        { stars: 4, count: 80 },  // 4-star ratings
        { stars: 3, count: 50 },  // 3-star ratings
        { stars: 2, count: 20 },  // 2-star ratings
        { stars: 1, count: 10 },  // 1-star ratings
    ];
    const reviewsData = [
        {
            name: "John King",
            date: "A day ago",
            text: "We loved staying in this charming home! It had all the amenities we needed, and the historic character was a bonus.",
            rating: 4.5,
            avatar: "https://picsum.photos/200/300", // Replace with actual avatar URL
        },
        {
            name: "Sarah Johnson",
            date: "2 days ago",
            text: "Fantastic place! The hosts were very accommodating, and we had a wonderful time exploring the area.",
            rating: 5,
            avatar: "https://picsum.photos/200/300", // Replace with actual avatar URL
        },
        {
            name: "Michael Smith",
            date: "3 days ago",
            text: "Great location but the place could use some updates. Overall, a good stay.",
            rating: 3.5,
            avatar: "https://picsum.photos/200/300", // Replace with actual avatar URL
        },
        {
            name: "Emily Davis",
            date: "4 days ago",
            text: "Absolutely loved it! The view was stunning, and the home was very cozy. Highly recommend!",
            rating: 5,
            avatar: "https://picsum.photos/200/300", // Replace with actual avatar URL
        },
        {
            name: "David Wilson",
            date: "5 days ago",
            text: "It was decent. Some amenities were missing, but the overall experience was satisfactory.",
            rating: 3,
            avatar: "https://picsum.photos/200/300", // Replace with actual avatar URL
        },
    ];
    
    const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View
                style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 10,
                    backgroundColor: 'white',
                }}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()} // Go back to the previous screen
                >
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Review</Text>
                </View>
            </View>
            <View style={{ marginTop: 2, backgroundColor: 'white', paddingHorizontal: 10 }}>
                <Text style={{ paddingTop: 10, fontWeight: '700', fontSize: 25 }}>262 Views</Text>
            </View>

            {/* Star Rating and Distribution Section */}
            <View style={{ flexDirection: 'row', backgroundColor: '#fafafa', margin: 10 }}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>4.5/5</Text>
                    <StarRating rating={rating} onChange={setRating} starSize={18} style={{}} />
                </View>
                <View style={styles.ratingDistributionContainer}>
                    {ratings.map((rating) => (
                        <View key={rating.stars} style={styles.ratingRow}>
                            <Text style={styles.ratingText}>{rating.stars}</Text>
                            <View style={styles.barContainer}>
                                <View
                                    style={[
                                        styles.ratingBar,
                                        { width: `${(rating.count / totalRatings) * 100}%` },
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.remainingBar,
                                        { width: `${((totalRatings - rating.count) / totalRatings) * 100}%` },
                                    ]}
                                />
                            </View>
                           
                        </View>
                    ))}
                </View>
            </View>
            <View>
                {reviewsData.map((review, index) => (
                    <ItemReview key={index} item={review} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 6, // Distance from top
        left: 10, // Distance from left
        borderRadius: 30,
        padding: 10,
    },
    ratingContainer: {
        padding: 10,
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderColor: '#fafafa',
        flex: 2, // Allow to take available space,
        
    },
    ratingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ratingDistributionContainer: {
        padding: 10,
        flex: 3, // Allow to take more space than ratingContainer
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    barContainer: {
        flex: 1,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        overflow: 'hidden',
        marginHorizontal: 5,
    },
    ratingBar: {
        height: '100%',
        backgroundColor: '#FFB74D', // Color for filled bar
    },
    remainingBar: {
        height: '100%',
        backgroundColor: '#f0f0f0', // Color for remaining part
    },
    countText: {
        marginLeft: 5,
        fontSize: 16,
    },
});
