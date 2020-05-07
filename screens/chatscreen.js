import React from "react"
import {Platform, KeyboardAvoidingView, SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import Fire from '../Fire';
import {Ionicons} from "@expo/vector-icons";


export default class chatscreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    
    state = {
        messages: []
    }

    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        };
    }

    componentDidMount(){
        Fire.shared.get(message =>
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))
        );
    }

    componentWillUnmount() {
        Fire.shared.off();
    }

    render() {
        
            
        
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;

        if (Platform.OS === 'android') {
            return(
                
                <KeyboardAvoidingView style = {{flex: 1, backgroundColor: "grey"}} behavior="padding" keyboardVerticalOffset={50} enabled>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Message")}> 
                          <Ionicons name="md-arrow-back" size={24} color="black"></Ionicons>
                        </TouchableOpacity>
                    </View>
                    {chat}

                </KeyboardAvoidingView>


                
            );
        }

        return <SafeAreaView style={{flex: 1, backgroundColor: "blue"}}>{chat}</SafeAreaView>;
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomWidth:1,
        borderBottomColor: "#D8D9DB",
        backgroundColor: "white",
        marginTop: 20
    }
});
