import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation, Image } from 'react-native';
import * as firebase from 'firebase'


export default class profilescreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();

    };

    render() {

        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <Text style={styles.headerTitle}>My Profile</Text>
                </View>
                <Image 
                    source={require("../assets/authHeader.png")}
                    style ={{marginTop: 5, marginLeft: -1,  top: 0, left: 0, width: '100%', height: 130}}
                ></Image>
                <Image 
                    source={require("../assets/tempAvatar.png")}
                    style ={{width: 90,
                        height: 90,
                        borderRadius: 18,
                        marginLeft: 155,
                    position: "absolute",
                    marginTop:167}}
                ></Image>
                <View style={styles.feedItem} >
                    <Text style={{marginLeft: 125, marginTop: 28}}> {this.state.email}</Text>

                </View>
                <View>

                </View>
                <Text>Hi {this.state.email} !</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                        <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingTop: 34,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8,
        marginLeft: 10,
        height: 180,
        width: "95%",
        
    }
});