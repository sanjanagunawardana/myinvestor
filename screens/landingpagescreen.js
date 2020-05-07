import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import Fire from "../Fire";


export default class landingpagescreen extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require("../assets/landingHeader.png")}
                    style ={{marginTop: -1, marginLeft: -1, position: "absolute", top: 0, left: 0, width: '100%', height: 690}}
                ></Image>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Loading")}>
                <Image 
                  source={require("../assets/land1.png")}
                  style ={{ width: 340, height: 130,marginLeft:37, marginTop:380 }}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Loading")}>
                <Image 
                  source={require("../assets/land2.png")}
                  style ={{ width: 340, height: 130,marginLeft:37, marginTop:20 }}
                ></Image>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});