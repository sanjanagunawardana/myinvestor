import React from "react"
import {View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import {Ionicons} from '@expo/vector-icons'
import * as firebase from 'firebase'

export default class reminderscreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <Text style={styles.headerTitle}>Schedule meetings</Text>
                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate("Home")}>
                    <Ionicons name="md-arrow-back" size={30} color="grey"></Ionicons>
                    
                </TouchableOpacity>
                <TouchableOpacity>
                                 <Image 
                    source={require("../assets/logo.png")}
                    style ={{ width: 45, height: 45,marginLeft:350, marginTop: -30 }}
                ></Image>
                      </TouchableOpacity>
                </View>
    <ScrollView>
                <Calendar
                // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2020-05-12': {selected: true, marked: true, selectedColor: '#2B037D'},
    '2020-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2020-05-21': {marked: true, dotColor: 'red', activeOpacity: 0},
  }}
                />
                
                <Image 
                              source={require("../assets/reminder.png")}
                              style ={{marginTop: -1, marginLeft: -1, top: 0, left: 0, width: '100%', height: 500}}
                 ></Image>
        </ScrollView>
        <TouchableOpacity style={styles.add}>
                    <Ionicons name="ios-add" size={30} color="#FFF"></Ionicons>
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
    back: {
        position: "absolute",
        top: 30,
        left: 32,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        position: "absolute",
        top: 550,
        left: 320,
        width: 62,
        height: 62,
        borderRadius: 40,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    }
});