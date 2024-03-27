import React, { useRef } from 'react';
import { ImageBackground, Image, Animated, View, StyleSheet, PanResponder, Text, Dimensions, Pressable, SafeAreaView } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';


const App = () => {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center", backgroundColor: "translution", width: "100%", height: 40 }}>
                <Image style={{ width: 40, height: 40, left: 0, position: "absolute", top: 10 }} source={{ uri: "https://cdn-icons-png.flaticon.com/256/3524/3524659.png" }} />
                <Image style={{ width: 40, height: 40, right: 0, position: "absolute", top: 10 }} source={require("../assets/than-tai.jpg")} />
            </View>
            <View style={{ height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(254, 165, 1, 0.8)", marginTop: 20, }}>
                <Text style={{ gap: 10, fontFamily: 'Arial', fontSize: 25, color: "red" }}>Miền Nam</Text>
            </View>
            <View>
                <View style={[styles.customer]}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "red" }} />
                    <Text>Khách Hàng 1</Text>
                </View>
                <View style={styles.customer}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "red" }} />
                    <Text>Khách Hàng 2</Text>
                </View>
                <View style={styles.customer}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "red" }} />
                    <Text>Khách Hàng 3</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch' or 'contain'
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    Signup: {
        borderWidth: 1,
        margin: 10,
        backgroundColor: "white",
    },
    button: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        padding: 5,
        backgroundColor: "white",
    },
    pic: {
        width: 300,
        height: 300,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    Form: {
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(224, 186, 130, 0.25)',
    },
    Font: {
        fontFamily: "Arial Helvetica sans-serif",
        fontSize: 50,
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 193, 0.5)',
        borderRadius: 20,
    },
    customer: {
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 10,
        paddingLeft: 10,
    },
    bar: {
        justifyContent: 'space-around',
        backgroundColor: "rgba(255,0,0,0.5)",
        height: 50, justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
});

export default App;