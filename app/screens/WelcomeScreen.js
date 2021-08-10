import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/front.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
        <AppText style={styles.tagline}>Velkommen til </AppText>
        <AppText style={[styles.tagline, styles.italic]}>Kvadraturen</AppText>
        <AppText style={styles.tagline}>videregående skole</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Elever"
          color="secondary"
          onPress={() => navigation.navigate("HomeNavigator")}
        />
        <AppButton
          title="Ansatte"
          onPress={() => navigation.navigate("HomeTeacherNavigator")}
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
    height: 150,
    marginBottom: 15
  },
  logoContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    position: "absolute",
    top: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  tagline: {
    color: colors.black,
    fontSize: 22,
    fontWeight: "800",
    paddingVertical: 5,
    textTransform: "uppercase",
    letterSpacing: 2
  },
  italic: { fontStyle: "italic", color: colors.secondary, fontSize: 30 }
});

export default WelcomeScreen;
