import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import {createDrawerNavigator} from 'react-navigation-drawer'

import {Ionicons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

import loadingscreen from './screens/loadingscreen'
import loginscreen from './screens/loginscreen'
import registerscreen from './screens/registerscreen'

import homescreen from './screens/homescreen'
import postscreen from './screens/postscreen'
import notificationscreen from './screens/notificationscreen'
import messagescreen from './screens/messagescreen'
import profilescreen from './screens/profilescreen'
import chatscreen from './screens/chatscreen'
import reminderscreen from './screens/reminderscreen'
import actscreen from './screens/actscreen'

import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyBciehNHOurYdcORwFG-2IBWmxHrhBjdjk",
  authDomain: "my-investor-cc084.firebaseapp.com",
  databaseURL: "https://my-investor-cc084.firebaseio.com",
  projectId: "my-investor-cc084",
  storageBucket: "my-investor-cc084.appspot.com",
  messagingSenderId: "780848586074",
  appId: "1:780848586074:web:8795281c40a917a1d96763"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: homescreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor}/>
          }
        },
        Message: {
          screen: messagescreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={30} color={tintColor} />
          }
        },
        Post: {
          screen: postscreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => 
            <Ionicons 
            name="ios-add-circle" 
            size={50} 
            color="#E9446A" 
            style={{
              shadowColor: "#E9446A",
              shadowOffset: { width: 0, height: 0},
              shadowRadius: 10,
              shadowOpacity: 0.3
            }}/>
          } 
        },
        Notification: {
          screen: notificationscreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-stats" size={30} color={tintColor}/>
          }
        },
        Profile: {
          screen: profilescreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={30} color={tintColor}/>
          }
        }
      },
      {
        defaultNavigationOptions:{
          tabBarOnPress: ({navigation, defaultHandler}) => {
            if (navigation.state.key === "Post"){
              navigation.navigate("postModal")
            } else {
                defaultHandler()
            }
          }
        },
        tabBarOptions: {
          activeTintColor: "black",
          inactiveTintColor: "#B8BBC4",
          showLabel: false
        }
      }
    ),
    postModal: {
      screen: postscreen
    }
  },
  {
    node: "modal",
    headerMode: "none",
    
  }
)

const DrawerNavigator = createDrawerNavigator({
  reminderscreen,
  actscreen
})



const AuthStack = createStackNavigator({
  
  Login: loginscreen,
  Register: registerscreen,
  Reminder: reminderscreen,

});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: loadingscreen,
      Chat: chatscreen,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName:"Loading"
    }
  )
);

