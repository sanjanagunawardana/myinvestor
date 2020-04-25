import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import loadingscreen from './screens/loadingscreen'
import loginscreen from './screens/loginscreen'
import registerscreen from './screens/registerscreen'
import homescreen from './screens/homescreen'

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

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: homescreen
});

const AuthStack = createStackNavigator({
  Login: loginscreen,
  Register: registerscreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: loadingscreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName:"Loading"
    }
  )
);