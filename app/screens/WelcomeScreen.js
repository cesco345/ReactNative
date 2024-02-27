import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "../components/AppButton";
import React from "react";

export default function App() {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="contain"
      source={require("../assets/saona.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/hat_256.png")} />
        <Text>Follow the Cap!</Text>
      </View>
      <AppButton title="Login" />
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});
