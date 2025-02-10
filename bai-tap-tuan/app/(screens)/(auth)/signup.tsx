import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }
        alert(`Welcome, ${name}! Your account has been created.`);
    };

    const navigateToLogin = () => {
        router.push('/(screens)/(auth)/login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor='#999'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholderTextColor='#999'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor='#999'
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Pressable onPress={navigateToLogin}>
                    <Text style={styles.backToLogin}>Back to Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#FFF',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
    footer: {
        marginTop: 30,
        alignItems: 'center',
    },
    backToLogin: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: '600',
    },
});

export default Signup;
