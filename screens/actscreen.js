import React from "react"
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as firebase from 'firebase'

export default class actscreen extends React.Component {
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

        
        <Text style={{marginLeft:105}}>Select category</Text>
        <TouchableOpacity>
                                 <Image 
                    source={require("../assets/logo.png")}
                    style ={{ width: 45, height: 45,marginLeft:100, marginTop: -10 }}
                ></Image>
                      </TouchableOpacity>
    </View>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                <Image 
                    source={require("../assets/tech.png")}
                    style ={styles.side1}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/car.png")}
                    style ={styles.side2}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/arc.png")}
                    style ={styles.side1}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/app.png")}
                    style ={styles.side2}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/homes.png")}
                    style ={styles.side1}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/hospital.png")}
                    style ={styles.side2}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/music.png")}
                    style ={styles.side1}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image 
                    source={require("../assets/childern.png")}
                    style ={styles.side2}
                ></Image>
                </TouchableOpacity>
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

    side1: {
        width: 160, 
        height: 140,
        marginLeft:30,
    },

    side2: {
        width: 160, 
        height: 140,
        marginLeft:220,
        marginTop:-140
    },



});