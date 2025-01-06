import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IntroScreen = ({ navigation }: any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Chuyển đến màn hình Home sau 5 giây
        }, 5000);

        return () => clearTimeout(timer); // Dọn dẹp khi component unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Hiển thị ảnh avatar */}
            <Image
                source={require('../../assets/images/avatar.jpg')} // Đường dẫn tới ảnh avatar của bạn
                style={styles.avatar}
            />
            {/* Hiển thị các thông tin */}
            <Text style={styles.text}>Huỳnh Minh Trí</Text>
            <Text style={styles.text}>MSSV: 21110329</Text>
            <Text style={styles.text}>Trường Đại học Sư phạm Kỹ thuật TP.HCM</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    avatar: {
        width: 100, // Kích thước của ảnh
        height: 100, // Kích thước của ảnh
        borderRadius: 50, // Để ảnh có hình tròn
        marginBottom: 20, // Khoảng cách giữa ảnh và văn bản
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10, // Thêm khoảng cách giữa các dòng văn bản
    },
});

export default IntroScreen;
