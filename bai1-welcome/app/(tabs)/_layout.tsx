import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './intro'; // Màn hình giới thiệu
import HomeScreen from './home'; // Màn hình trang chủ

const Stack = createStackNavigator();

const Layout = () => {
    return (
        <Stack.Navigator initialRouteName='Intro'>
            <Stack.Screen name='Intro' component={IntroScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default Layout;
