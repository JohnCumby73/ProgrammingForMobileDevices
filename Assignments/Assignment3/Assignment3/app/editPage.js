import {View, Text, StyleSheet} from 'react-native';

export default function EditPage() {
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>This is the edit page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        text: {
            fontSize: 18,
            },
});