import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Apptext from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
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
        <AppButton title="Ansatte" onPress={() => console.log("Tapped")} />
        <AppButton
          title="Elever"
          color="secondary"
          onPress={() => console.log("Tapped")}
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
    width: "100%"
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
