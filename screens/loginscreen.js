import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class loginscreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login screen</Text>
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