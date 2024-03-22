import React, { useRef } from 'react';
import { ImageBackground, Image, Animated, View, StyleSheet, PanResponder, Text, Dimensions, Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-web';

const App = () => {
  return (
    <ImageBackground
      source={require("../assets/than-tai.jpg")} // Path to your image file
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require("../assets/than-tai.jpg")} style={styles.pic} />
          <View style={{justifyContent: 'center', alignItems: "center", }}>
            <Text style={styles.Font}>Thần tài đến</Text>
          </View>
        </View>

        <View style={styles.Form}>
          <Text style={styles.titleText}>Tài Khoản</Text>
          <TextInput style={styles.Signup}></TextInput>

          <Text style={styles.titleText}>Mật khẩu</Text>
          <TextInput style={styles.Signup}></TextInput>

          <Pressable style={styles.button}>
            <Text>Đăng Nhập</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text>Đăng Ký</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text>Quên mật khẩu? </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
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
    width: '100%', // Take up entire width
    height: '100%', // Take up entire height
    resizeMode: 'cover', // or 'contain' for different resizing modes
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
});

export default App;