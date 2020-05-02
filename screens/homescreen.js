import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment'
import { SafeAreaView } from 'react-navigation';

//temp
var posts = [
    {
        id: "1",
        name: "Joe bros",
        text: "oh baby oh",
        timestamp: 1545654258965,
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

export default class homescreen extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar}/>
                <View style={{flex: 1}}>
                    <View style={{flexDirection:"row",justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#737888"/>
                    </View>

                    <Text style={styles.post}>{post.text}</Text>

                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />

                    <View style={{flexDirection:"row"}}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{marginRight:5}} />
                        <Text>like</Text>
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" style={{marginRight:5, marginLeft:36}} />
                        <Text>comment</Text>
                        <Ionicons name="ios-share" size={24} color="#73788B" style={{marginRight:5, marginLeft:36}} />
                        <Text>share</Text>
                    </View>

                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                <View style={styles.header}> 
                    <TouchableOpacity onPress = {this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24} color="#73788B" style={{marginLeft:30}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:140}}>Feed</Text>
                </View>
                </SafeAreaView>
                <FlatList 
                    style={styles.feed}
                    data={posts}
                    renderItem={({item}) => this.renderPost(item)}
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
        flexDirection:"row",
       
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
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
        
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
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