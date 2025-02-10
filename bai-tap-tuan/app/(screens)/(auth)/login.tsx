import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { router } from 'expo-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }
        Alert.alert('Login Successful', `Welcome back, ${email}!`);
        navigateToUpdateProfile();
    };

    const navigateToUpdateProfile = () => {
        router.push('/(screens)/(user)/updateProfile');
    };

    const navigateToSignUp = () => {
        router.push('/(screens)/(auth)/signup');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputContainer}>
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <Pressable onPress={navigateToSignUp}>
                    <Text style={styles.signupLink}>Sign Up</Text>
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
    footerText: {
        fontSize: 16,
        color: '#777',
    },
    signupLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4CAF50',
        marginTop: 5,
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

export default Login;
