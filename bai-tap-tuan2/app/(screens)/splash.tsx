import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.push('/(screens)/(auth)/login');
            router.push('/(screens)/(onboarding)/onboarding');
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/apple.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    text: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 600,
    },
    logo: {
        width: 80,
        height: 80,
        color: '#fff',
    },
    loading: {
        marginTop: 16,
        color: '#fff',
    },
});

export default SplashScreen;
