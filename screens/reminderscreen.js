import React from "react"
import {View, Text, StyleSheet} from 'react-native'


export default class reminderscreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>rem screen</Text>
                
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