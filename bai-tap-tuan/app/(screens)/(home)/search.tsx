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
import { useRouter } from 'expo-router';

const Search = () => {
    const navigation = useNavigation();
    const navigateToUpdateProfile = () => {
        router.push('/(screens)/(user)/updateProfile');
    };

    const goToProductDetail = (product: any) => {
        router.push({
            pathname: '/(screens)/(home)/productDetail',
            params: { product: JSON.stringify(product) },
        });
    };

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Product 1',
            image: 'https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg',
            price: 10,
        },
        {
            id: '2',
            name: 'Product 2',
            image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
            price: 15,
        },
        {
            id: '3',
            name: 'Product 3',
            image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg',
            price: 12,
        },
        {
            id: '4',
            name: 'Product 4',
            image: 'https://images.pexels.com/photos/53494/mushroom-fungi-fungus-many-53494.jpeg',
            price: 8,
        },
        {
            id: '5',
            name: 'Product 5',
            image: 'https://images.pexels.com/photos/1340856/pexels-photo-1340856.jpeg',
            price: 20,
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [priceFilter, setPriceFilter] = useState<number | null>(null);

    useEffect(() => {
        let filtered = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

        if (priceFilter !== null) {
            filtered = filtered.filter((product) => product.price <= priceFilter);
        }

        setFilteredProducts(filtered);
    }, [searchQuery, priceFilter, products]);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar backgroundColor='#f8f8f8' barStyle='dark-content' />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={24} color='black' />
                </TouchableOpacity>
                <TextInput
                    style={styles.search}
                    placeholder='Search'
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity onPress={navigateToUpdateProfile}>
                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
                </TouchableOpacity>
            </View>

            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setPriceFilter(10)} style={styles.filterButton}>
                    <Text>≤ $10</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPriceFilter(15)} style={styles.filterButton}>
                    <Text>≤ $15</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPriceFilter(null)} style={styles.filterButton}>
                    <Text>All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => goToProductDetail(item)}>
                        <View style={styles.productContainer}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
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
        marginTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
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
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    filterButton: {
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    productContainer: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#007bff',
        marginTop: 5,
    },
    footer: {
        backgroundColor: '#f8f8f8',
        padding: 10,
    },
});

export default Search;
