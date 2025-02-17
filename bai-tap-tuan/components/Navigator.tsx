import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Navigator = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navButton}>
                <Ionicons name='home' size={20} color='#333' />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton}>
                <Ionicons name='search' size={20} color='#333' />
                <Text style={styles.navText}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton}>
                <Ionicons name='cart' size={20} color='#333' />
                <Text style={styles.navText}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton}>
                <Ionicons name='person' size={20} color='#333' />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#e4e7ec',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navButton: {
        alignItems: 'center',
        margin: 8,
    },
    navText: {
        marginTop: 3,
        color: '#333',
        fontSize: 14,
    },
});

export default Navigator;
