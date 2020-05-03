import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation, Image, FlatList, ScrollView} from 'react-native';
import * as firebase from 'firebase'
import { Avatar } from 'react-native-gifted-chat';
import { FontAwesome5 } from '@expo/vector-icons';


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
                <ScrollView>
                <Image 
                    source={require("../assets/tempBackground.png")}
                    style ={{marginTop: 5, marginLeft: -1,  top: 0, left: 0, width: '100%', height: 130}}
                ></Image>
                
                <View style={styles.feedItem} >
                    <View style={{alignItems: "center",justifyContent: "center",
                marginTop: 40}}>
                    <Text style= {{fontSize: 17}}> {this.state.displayName}</Text>
                    </View>

                    <FontAwesome5 name="pen" size={20} color="#157EFB" style={{marginLeft:350, marginTop:-58}}/>

                    <View style={{marginLeft: 5,
                marginTop: 50, }}>
                    <Text style= {{fontSize: 13, fontWeight:"bold"}}>Undergraduate at Informatics </Text>
                    <Text style= {{fontSize: 13, fontWeight:"bold"}}>institute of technology </Text>
                    <Text style= {{fontSize: 13}}>Age - 21</Text>
                    <Text style= {{fontSize: 13}}>Email - {this.state.email}</Text>
                    <Text style= {{fontSize: 13}}>No - 077856428</Text>
                    <Text style= {{fontSize: 13}}>Sri lanka</Text>
                    </View>
                </View>

                <View style={styles.feedItem} >
                    <Text style= {{fontSize: 14, marginTop: 10, marginLeft:5}}>Achievement Strength: <Text style= {{fontSize: 14, fontWeight:"bold"}}> Intermediate</Text> </Text>
                    <Image 
                    source={require("../assets/Achieve.png")}
                    style ={{marginTop: 5, marginLeft: -1,  top: 0, left: 0, width: 375, height: 30}}
                    ></Image>

                    <View style={{alignItems: "center",justifyContent: "center"}}>

                    <View style={styles.box}>
                    <FontAwesome5 name="medal" size={20} color="#157EFB" style={{marginLeft:-140, marginTop:20}}/>
                    <Text style= {{fontSize: 15, fontWeight:"bold", marginTop:-22, paddingLeft: 30}}>Add Achievements  </Text>
                    <Text style= {{color: "#707070", paddingBottom: 5}}>Add all your achievements to boost your achievement strength to attract more investors. </Text>
                    <TouchableOpacity style={styles.button} >
                    <Text style={{color: "white", fontWeight: "500"}}>Add</Text>
                    </TouchableOpacity>
                    </View>

                    </View>
                        

                </View>

                <View style={styles.feedItem} >
                <Text style= {{fontSize: 15, fontWeight:"bold",marginTop: 10, marginLeft:5}}>Experience</Text>
                <FontAwesome5 name="pen" size={20} color="#157EFB" style={{marginLeft:350, marginTop:-25}}/>
                <Image 
                    source={require("../assets/1.png")}
                    style ={{marginTop: 20, marginLeft: 10,  top: 0, left: 0, width: 60, height: 60}}
                ></Image>

                <Text style= {{fontSize: 14, fontWeight:"bold",marginTop: -60, marginLeft:75}}>Project management intern</Text>

                <Text style= {{fontSize: 14,marginTop: 1, marginLeft:75}}>Rotaract club of IIT {"\n"}Sep 2016 - present</Text>
                 <Image 
                    source={require("../assets/2.png")}
                    style ={{marginTop: 20, marginLeft: 10,  top: 0, left: 0, width: 60, height: 60}}
                ></Image>

                <Text style= {{fontSize: 14, fontWeight:"bold",marginTop: -60, marginLeft:75}}>Member</Text>

                <Text style= {{fontSize: 14,marginTop: 1, marginLeft:75}}>Rotaract club of IIT {"\n"}Sep 2016 - present</Text>
                </View>

                <View style={styles.feedItem} >
                <Text style= {{fontSize: 15, fontWeight:"bold",marginTop: 10, marginLeft:5}}>Education</Text>
                <FontAwesome5 name="pen" size={20} color="#157EFB" style={{marginLeft:350, marginTop:-25}}/>
                <Image 
                    source={require("../assets/3.png")}
                    style ={{marginTop: 20, marginLeft: 10,  top: 0, left: 0, width: 60, height: 60}}
                ></Image>

                <Text style= {{fontSize: 14, fontWeight:"bold",marginTop: -60, marginLeft:75}}>Lyceum international school</Text>

                <Text style= {{fontSize: 14,marginTop: 1, marginLeft:75}}>Rotaract club of IIT {"\n"}Sep 2016 - present</Text>
                 <Image 
                    source={require("../assets/3.png")}
                    style ={{marginTop: 20, marginLeft: 10,  top: 0, left: 0, width: 60, height: 60}}
                ></Image>

                <Text style= {{fontSize: 14, fontWeight:"bold",marginTop: -60, marginLeft:75}}>Informatics institute of technology</Text>

                <Text style= {{fontSize: 14,marginTop: 1, marginLeft:75}}>Rotaract club of IIT {"\n"}Sep 2016 - present</Text>
                </View>
                 
                <Image 
                    source={require("../assets/tempAvatar.png")}
                    style ={styles.avatar}
                ></Image>
                
                <Text>Hi {this.state.email} !</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                        <Text>Logout</Text>
                </TouchableOpacity>
                </ScrollView>
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
        
        marginVertical: 8,
        marginLeft: 10,
        height: 250,
        width: "95%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    avatar: {
        width: 90,
            height: 90,
            borderRadius: 18,
            marginLeft: 158,
            position: "absolute",
             marginTop:95,
           shadowColor: "#000",
            shadowOffset: { width: 0, height: 2,},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5

        
    },
    box: {
        width: 270,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#707070",
        paddingHorizontal: 20,
        marginTop: 5

    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#157EFB",
        borderRadius: 4,
        width:70,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
        
    }
});