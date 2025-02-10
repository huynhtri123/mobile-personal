import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface UpdateProfileRequest {
    fullName: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string;
    file?: { uri: string; name: string; type: string };
}

const updateProfile = () => {
    const [fullName, setFullName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [file, setFile] = useState<{ uri: string; name: string; type: string } | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChooseFile = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const selectedFile = result.assets[0]; // Lấy file đầu tiên trong mảng assets
            setFile({
                uri: selectedFile.uri,
                name: selectedFile.fileName || 'profile_image.jpg',
                type: selectedFile.type || 'image/jpeg',
            });
        } else {
            Alert.alert('No file selected', 'Please choose a file to upload.');
        }
    };

    const handleSubmit = async () => {
        if (!fullName || !phoneNumber || !address || !dateOfBirth) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('phoneNumber', phoneNumber);
        formData.append('address', address);
        formData.append('dateOfBirth', dateOfBirth);

        if (file) {
            try {
                const response = await fetch(file.uri);
                const blob = await response.blob();

                formData.append('file', blob, file.name);
            } catch (error) {
                console.error('Error creating blob from file URI:', error);
                Alert.alert('Error', 'Unable to upload the file.');
            }
        }

        console.log('FormData submitted:', formData);
        Alert.alert('Form submitted', 'Call BE');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Profile</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    value={fullName}
                    onChangeText={setFullName}
                    placeholderTextColor='#999'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType='phone-pad'
                    placeholderTextColor='#999'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Address'
                    value={address}
                    onChangeText={setAddress}
                    placeholderTextColor='#999'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Date of Birth (YYYY-MM-DD)'
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    placeholderTextColor='#999'
                />
            </View>

            {/* Chọn ảnh từ thư viện */}
            <TouchableOpacity style={styles.button} onPress={handleChooseFile}>
                <Text style={styles.buttonText}>{file ? 'File selected' : 'Choose file'}</Text>
            </TouchableOpacity>

            {/* Nút gửi dữ liệu */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isLoading}>
                <Text style={styles.buttonText}>{isLoading ? 'Updating...' : 'Update Profile'}</Text>
            </TouchableOpacity>
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
});

export default updateProfile;
