import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class homescreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home screen</Text>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});