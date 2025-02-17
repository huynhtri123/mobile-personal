import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import Navigator from '@/components/Navigator';

const Home = () => {
    const navigation = useNavigation();
    const navigateToUpdateProfile = () => {
        router.push('/(screens)/(user)/updateProfile');
    };

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Product 1',
            image: 'https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$10',
        },
        {
            id: '2',
            name: 'Product 2',
            image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$15',
        },
        {
            id: '3',
            name: 'Product 3',
            image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$12',
        },
        {
            id: '4',
            name: 'Product 4',
            image: 'https://images.pexels.com/photos/53494/mushroom-fungi-fungus-many-53494.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$8',
        },
        {
            id: '5',
            name: 'Product 5',
            image: 'https://images.pexels.com/photos/1340856/pexels-photo-1340856.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$20',
        },
        {
            id: '6',
            name: 'Product 6',
            image: 'https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$20',
        },
        {
            id: '7',
            name: 'Product 7',
            image: 'https://images.pexels.com/photos/212932/pexels-photo-212932.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$20',
        },
        {
            id: '8',
            name: 'Product 8',
            image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$20',
        },
        {
            id: '9',
            name: 'Product 9',
            image: 'https://images.pexels.com/photos/768090/pexels-photo-768090.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$20',
        },
        {
            id: '10',
            name: 'Product 10',
            image: 'https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg?auto=compress&cs=tinysrgb&w=600',
            price: '$20',
        },
    ]);

    const categories = [
        {
            id: '1',
            name: 'Rau',
            image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: '2',
            name: 'Trái cây',
            image: 'https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: '3',
            name: 'Củ',
            image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: '4',
            name: 'Quả',
            image: 'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: '5',
            name: 'Hạt',
            image: 'https://media.istockphoto.com/id/637856490/vi/anh/c%C3%A1c-lo%C3%A1i-%C4%91%E1%BA%ADu-kh%C3%A1c-nhau.jpg?b=1&s=612x612&w=0&k=20&c=zlN6R7_8lZLi1Lk1UTa_1rwVSfUUk1nwnYMbMNvMzm0=',
        },
    ];

    const [loading, setLoading] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState(3); // Chỉ tải 3 sản phẩm mỗi lần

    // Hàm tải thêm sản phẩm (giả lập gọi API)
    const loadMoreProducts = () => {
        if (!loading && visibleProducts < products.length) {
            setLoading(true);
            setTimeout(() => {
                setVisibleProducts(visibleProducts + 3); // Tải thêm 3 sản phẩm nữa
                setLoading(false);
            }, 1500); // Giả lập delay 1.5s
        }
    };

    // Fake image data for slideshow
    const slideShowImages = [
        'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/30742316/pexels-photo-30742316/free-photo-of-hinh-nh-khuy-n-m-i-gi-m-gia-50-s-ng-d-ng.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600',
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    // Hàm tự động chuyển slide mỗi 3 giây
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
        }, 3000); // Mỗi 3 giây chuyển slide một lần

        // Dọn dẹp khi component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar backgroundColor='#f8f8f8' barStyle='dark-content' />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={24} color='black' />
                </TouchableOpacity>
                <TextInput style={styles.search} placeholder='Search' />
                <TouchableOpacity onPress={navigateToUpdateProfile}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
                </TouchableOpacity>
            </View>

            <FlatList
                ListHeaderComponent={
                    <>
                        <Image source={{ uri: slideShowImages[currentSlideIndex] }} style={styles.slideShowImage} />
                        <Text style={styles.categoryTitle}>Categories</Text>
                        <FlatList
                            data={categories}
                            renderItem={({ item }) => (
                                <View style={styles.category}>
                                    <Image source={{ uri: item.image }} style={styles.categoryImage} />
                                    <Text style={styles.categoryName}>{item.name}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />

                        <Text style={styles.sectionTitle}>10 sản phẩm bán chạy</Text>
                        <FlatList
                            data={products.slice(0, 10)}
                            renderItem={({ item }) => (
                                <View style={styles.product}>
                                    <Image source={{ uri: item.image }} style={styles.productImage} />
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>{item.price}</Text> {/* Hiển thị giá */}
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />

                        <Text style={styles.sectionTitle}>Toàn bộ sản phẩm</Text>
                    </>
                }
                data={products.slice(0, visibleProducts)} // Chỉ hiển thị số lượng sản phẩm hiện tại
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={{ uri: item.image }} style={styles.productImageLeft} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>{item.price}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size='large' color='#007bff' /> : null}
            />

            <View style={styles.footer}>
                <Navigator />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 10 : 10,
        paddingBottom: 10,
        backgroundColor: '#f8f8f8',
    },
    search: {
        flex: 1,
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 25,
        marginHorizontal: 10,
        backgroundColor: '#f1f1f1',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    slideShowImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft: 15,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 15,
    },
    category: {
        marginRight: 15,
        alignItems: 'center',
    },
    categoryImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    categoryName: {
        marginTop: 8,
        fontSize: 14,
        textAlign: 'center',
    },
    product: {
        margin: 10,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    productName: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        fontWeight: '400',
        color: '#007bff',
        marginTop: 5,
    },
    productContainer: {
        flexDirection: 'row',
        margin: 10,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    productImageLeft: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    productInfo: {
        justifyContent: 'center',
    },
    footer: {
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    footerText: {
        fontSize: 16,
        color: '#007bff',
        fontWeight: 'bold',
    },
});

export default Home;
