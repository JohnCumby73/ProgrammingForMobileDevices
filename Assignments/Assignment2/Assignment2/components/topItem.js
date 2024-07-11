import React from 'react';
import { Text, Image, View} from 'react-native';


// TopItem component
const TopItem = ( { item }) => {
    return (
        <View>
            <Text>{item.title}</Text>
            <Image source = { { uri: item.image }} style={{ width: 100, height: 100}} />
            <Text>{item.description}</Text>
        </View>
    );
};

export default TopItem;