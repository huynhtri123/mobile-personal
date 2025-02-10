import { View, Text, FlatList, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import React from 'react';
import slides from '../../../data/slides';
import OnboardingItem from './item';
import Paginator from './paginator';
import { router } from 'expo-router';

const OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const handleSkip = () => {
        router.push('/(screens)/(auth)/login');
    };

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems?.length > 0 && viewableItems[0]?.index !== undefined) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollX}></Paginator>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButton: {
        margin: 16,
        bottom: 40,
        paddingHorizontal: 30,
        paddingVertical: 12,
        backgroundColor: '#493d8a',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: 200,
    },
    skipText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default OnBoarding;
