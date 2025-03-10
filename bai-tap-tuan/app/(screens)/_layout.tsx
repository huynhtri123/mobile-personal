import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='home' options={{ headerShown: false }} />
            <Stack.Screen name='splash' options={{ headerShown: false }} />
            <Stack.Screen name='(onboarding)/onboarding' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)/login' options={{ title: 'Login Page' }} />
            <Stack.Screen name='(auth)/signup' options={{ title: 'Signup Page' }} />
            <Stack.Screen name='(user)/updateProfile' options={{ title: 'Update Profile Page' }} />
            <Stack.Screen name='(home)/productDetail' options={{ title: 'Product Detail' }} />
            <Stack.Screen name='(home)/search' options={{ headerShown: false }} />
        </Stack>
    );
};

export default RootLayout;
