import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class lregisterscreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Register screen</Text>
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