import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/avatar.jpg')} // Đường dẫn ảnh đại diện của bạn
                    style={styles.avatar}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Hi, I'm Huỳnh Minh Trí!</ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.infoContainer}>
                <ThemedText type='subtitle'>About Me:</ThemedText>
                <ThemedText>
                    I'm a student at Trường Đại Học Sư Phạm Kỹ Thuật TPHCM, majoring in Software Technology.
                </ThemedText>
                <ThemedText>
                    My student ID is <ThemedText type='defaultSemiBold'>21110329</ThemedText>.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type='subtitle'>Step 1: Explore</ThemedText>
                <ThemedText>
                    Learn more about my projects and experiences on my personal website or portfolio.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    infoContainer: {
        gap: 8,
        marginBottom: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    avatar: {
        height: 178,
        width: 178,
        borderRadius: 89, // Để tạo ảnh hình tròn
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
