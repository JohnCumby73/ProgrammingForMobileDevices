import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavBar() {
    const router = useRouter();

    return (
        <View style = {styles.navBar}>
            <Button title ="Home" onPress = {() => router.push('/')} />
            <Button title = "Edit" onPress = {() => router.push('/editPage')} />
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 50,
        backgroundColor: '#f8f8f8',
        },
});