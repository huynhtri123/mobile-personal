import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Home;
