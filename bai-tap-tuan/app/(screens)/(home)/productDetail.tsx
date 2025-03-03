import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type Product = {
    id: string;
    name: string;
    image: string;
    price: string;
};

const ProductDetail: React.FC = () => {
    const { product } = useLocalSearchParams();
    const productData: Product = JSON.parse(product as string);

    return (
        <View style={styles.container}>
            <Image source={{ uri: productData.image }} style={styles.image} />
            <Text style={styles.name}>{productData.name}</Text>
            <Text style={styles.price}>{productData.price}</Text>
            <Text style={styles.description}>This is a detailed description of {productData.name}.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
    image: { width: '100%', height: 300, borderRadius: 10 },
    name: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
    price: { fontSize: 20, color: '#007bff', marginTop: 5 },
    description: { fontSize: 16, marginTop: 10, textAlign: 'center' },
});

export default ProductDetail;
