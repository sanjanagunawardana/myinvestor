import React from "react";
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'
import { StackNavigator } from 'react-navigation';


var messages = [
    {
        id: "1",
        name: "Joe bros",
        text: "oh baby oh",
        timestamp: 1588247356085,
        avatar: require("../assets/tempAvatar.png"),
        image: require("../assets/tempImage1.jpg")
    },
    {
        id: "2",
        name: "Jkapo bros",
        text: "ohhhhh",
        timestamp: 1545654255964,
        avatar: require("../assets/tempAvatar.png"),
        image: require("../assets/tempImage2.jpg")
    },
    {
        id: "3",
        name: "lamele",
        text: "oh baby oh",
        timestamp: 1545654258965,
        avatar: require("../assets/tempAvatar.png"),
        image: require("../assets/tempImage1.jpg")
    },
    {
        id: "4",
        name: "Jkapo bros",
        text: "ohhhhh",
        timestamp: 1545654255964,
        avatar: require("../assets/tempAvatar.png"),
        image: require("../assets/tempImage2.jpg")
    }
];

export default class messagescreen extends React.Component {
    
    renderMessage = message => {
        return (
            <View style={styles.feedItem} >
                <Image source={message.avatar} style={styles.avatar}/>
                <View style={{flex: 1}}>
                    
                    <View style={{flexDirection:"row",justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text style={styles.name}>{message.name}</Text>
                            <Text style={styles.timestamp}>{moment(message.timestamp).fromNow()}</Text>
                        </View>
                        
                        <Ionicons name="ios-arrow-round-forward" size={38} color="blue" style={{marginTop: 8}} onPress={() => this.props.navigation.navigate("Chat", message.name )}/>
                    </View>

                    <Text style={styles.post}>{message.text}</Text>

                    

                    

                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <Text style={styles.headerTitle}>Messages</Text>
                </View>

                <FlatList 
                    style={styles.feed}
                    data={messages}
                    renderItem={({item}) => this.renderMessage(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFECF4"
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
    feed: {
        fontSize: 30,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 18,
        marginRight: 16,
        marginTop: 9
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
        
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4,
        marginHorizontal: 2
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color:"#838899"
    },
    postImage:{
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 10
    }
});