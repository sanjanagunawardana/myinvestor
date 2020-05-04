import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";

const { width } = Dimensions.get("window");


export default class notificationscreen extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            xTabThree,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,
            translateY
        } = this.state;
        return (

            <View style={{ flex: 1 }}>
                <View style={styles.header}> 
                    <Text style={styles.headerTitle}>Dashboard</Text>
                </View>
                <View
                    style={{
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "35%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#007aff"
                                }}
                            >
                                Content
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#007aff"
                                }}
                            >
                                Activity
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabThree: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 2 }, () =>
                                    this.handleSlide(xTabThree)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 2 ? "#fff" : "#007aff"
                                }}
                            >
                                Audience
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            
                            <View style={{ marginTop: 20 }}>
                                <Image
                                    source={require("../assets/tempAvatar.png")}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 15
                                    }}
                                />
                            </View>
                            <Text style={{fontWeight:"bold", padding: 10}}>Test</Text>
                            <Image 
                              source={require("../assets/stat1.png")}
                              style ={{marginTop: -1, marginLeft: -1, top: 0, left: 0, width: '100%', height: 650}}
                             ></Image>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                           
                            <View style={{ marginTop: 20 }}>
                                <Image
                                    source={require("../assets/tempAvatar.png")}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 15
                                    }}
                                />
                            </View>
                            <Text style={{fontWeight:"bold", padding: 10}}>Test</Text>
                            <Image 
                              source={require("../assets/stat2.png")}
                              style ={{marginTop: -1, marginLeft: -1, top: 0, left: 0, width: '100%', height: 600}}
                            ></Image>
                            <Image 
                              source={require("../assets/stat3.png")}
                              style ={{marginTop: -1, marginLeft: -1, top: 0, left: 0, width: '100%', height: 540}}
                            ></Image>

                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                
                            }}
                        >
                           
                            <View style={{ marginTop: 20 }}>
                                <Image
                                    source={require("../assets/tempAvatar.png")}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 15
                                    }}
                                />
                            </View>
                            <Text style={{fontWeight:"bold", padding: 10}}>Testttt</Text>
                            <Image 
                              source={require("../assets/stat1.png")}
                              style ={{marginTop: -1, marginLeft: -1, top: 0, left: 0, width: '100%', height: 650}}
                             ></Image>
                        </Animated.View>
                    </ScrollView>
                </View>
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
    }
});