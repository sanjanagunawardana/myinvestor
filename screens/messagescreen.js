import React from "react"
import {View, Text, StyleSheet} from 'react-native'


export default class messagescreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Message screen</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FBF9F5"
    }
});