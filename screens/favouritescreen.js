import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment'
import { SafeAreaView } from 'react-navigation';
import * as firebase from 'firebase'

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

export default class favouritescreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor(){
        super();
        this.state ={
            status:false
        }
    }

    signOutUser = () => {
        firebase.auth().signOut();

    };
     
    ShowHideTextComponentView = () =>{
      if(this.state.status == true)
      {
        this.setState({status: false})
      }
      else
      {
        this.setState({status: true})
      }
    };
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

                        <Ionicons name="ios-heart" size={24} color="red" style={{marginRight:3}}/>
                    </View>

                    <Text style={styles.post}>{post.text}</Text>

                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />

                    <View style={{flexDirection:"row"}}>
                        <Ionicons name="md-thumbs-up" size={24} color="#73788B" style={{marginRight:5}} />
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

            <>
              <View style={styles.containerBar}>

              {this.state.status ?  
                      <TouchableOpacity>
                                 <Image 
                    source={require("../assets/tempAvatar.png")}
                    style ={{ width: 80, height: 80,marginLeft:10 }}
                ></Image>
                      </TouchableOpacity>
                  : null }

                  {this.state.status ?  
                      <Text style={{color:"#FFF", marginTop: 10 ,marginLeft:10}}>melisa Perara</Text>
                  : null }

                    {this.state.status ?  
                      <Text style={{color:"#FFF", marginTop: 10 ,marginLeft:10}}>melisap@gmail.com</Text>
                  : null }


                  {this.state.status ?  
                      <Button
                      title=""
                      //spaces
                    />
                  : null }
                  
                  
                  {this.state.status ?  
                      <Button
                      title="                 Schedule meetings                 "
                      onPress={() => this.props.navigation.navigate("Reminder")}
                    />
                  : null }
                  {this.state.status ?  
                      <Button
                      title="Search ideas"
                      onPress={() => this.props.navigation.navigate("Act")}
                    />
                  : null }

                    {this.state.status ?  
                      <Button
                      title="Upload ideas"
                      //onPress={() => this.props.navigation.navigate("Upload")}
                    />
                  : null }
                  
                  {this.state.status ?  
                      <Button
                      title="Favourites"
                      onPress={() => this.props.navigation.navigate("Favourite")}
                    />
                  : null }

                    {this.state.status ?  
                      <Button
                      title="payment"
                      //onPress={() => this.props.navigation.navigate("payment")}
                    />
                  : null }

                  {this.state.status ?  
                      <Button
                      title="about us"
                      //onPress={() => this.props.navigation.navigate("About us")}
                    />
                  : null }

                  {this.state.status ?  
                      <Button
                      title="contact us"
                      //onPress={() => this.props.navigation.navigate("Contact us")}
                    />
                  : null }

                  {this.state.status ?  
                      <Button
                      title="Mange profile"
                      //onPress={() => this.props.navigation.navigate("About us")}
                    />
                  : null }

                  {this.state.status ?  
                      <Button
                      title="logout"
                      style={{backgroundColor:"red"}}
                      onPress={this.signOutUser}
                    />
                  : null }
                  {this.state.status ?  
                      <Button
                      title=""
                      //spaces
                    />
                  : null }
                  
              </View>
              <FontAwesome5 name="bars" size={24} color="#73788B" style={{marginLeft:30}} onPress={this.ShowHideTextComponentView}/>
          </>
          
                    
                    <Text style={{marginLeft:130}}>Favourites</Text>
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
    containerBar: {
        backgroundColor: 'grey',
        maxWidth: 300,
        paddingTop: 20
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