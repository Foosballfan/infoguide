import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/hands.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
        <Text style={styles.tagline}>Kvadraturens Guide</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Elever"
          color="secondary"
          onPress={() => navigation.navigate("StudentWelcomeScreen")}
        />
        <AppButton
          title="Ansatte"
          onPress={() => navigation.navigate("TeacherWelcomeScreen")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 20
  },
  logo: {
    width: 170,
    height: 150
  },
  logoContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    position: "absolute",
    top: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  tagline: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
});

export default WelcomeScreen;
