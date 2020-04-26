import React from "react"
import {View, Text, StyleSheet} from 'react-native'


export default class profilescreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile screen</Text>
                
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