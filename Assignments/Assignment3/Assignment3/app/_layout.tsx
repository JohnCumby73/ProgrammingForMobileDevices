// This is a layout route. Here you define what you want to see on every page.

import { Slot } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function Layout() {
    return (
        <View style={styles.container}>
            <View style ={styles.navBarContainer}>
                <NavBar />
            </View>
            <View style = {styles.content}>
                <Slot />
            </View>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        },
    content: {
        flex: 1,
        },
    navBarContainer: {
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
        }
});