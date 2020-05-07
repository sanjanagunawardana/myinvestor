import React from "react";
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment'
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase'


var messages = [
    {
        id: "1",
        name: "James fernando",
        text: "meeting set",
        timestamp: 1588247356085,
        avatar: require("../assets/tempAvatar2.jpg"),
        image: require("../assets/tempImage1.png")
    },
    {
        id: "2",
        name: "John holdings",
        text: "Keep be noted",
        timestamp: 1545654255964,
        avatar: require("../assets/tempAvatar3.jpg"),
        image: require("../assets/tempImage2.png")
    },
    {
        id: "3",
        name: "Anne lee",
        text: "Interested",
        timestamp: 1545654258965,
        avatar: require("../assets/tempAvatar4.jpg"),
        image: require("../assets/tempImage1.png")
    },
    {
        id: "4",
        name: "Bawantha gunawardana",
        text: "Well done",
        timestamp: 1545654255964,
        avatar: require("../assets/tempAvatar5.jpg"),
        image: require("../assets/tempImage2.png")
    }
];

export default class messagescreen extends React.Component {
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

    state = {
        name: ""
    };
    continue= () => {
        this.props.navigation.navigate("Chat", {name: this.state.name} );
    }
    
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
                        
                        <Ionicons name="ios-arrow-round-forward" size={38} color="blue" style={{marginTop: 8}} onPress={this.continue}/>
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
                    <Text style={{marginLeft:160, marginTop:-20}}>Messages</Text>
                    <TouchableOpacity>
                                 <Image 
                    source={require("../assets/logo.png")}
                    style ={{ width: 45, height: 45,marginLeft:350, marginTop: -30 }}
                ></Image>
                      </TouchableOpacity>
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
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    
    containerBar: {
        backgroundColor: 'grey',
        maxWidth: 300,
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
        borderRadius: 40,
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