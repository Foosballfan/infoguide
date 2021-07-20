import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import * as Linking from "expo-linking";

import Apptext from "./AppText";
import AppButton from "./AppButton";
import colors from "../config/colors";
import AppText from "./AppText";

function VirituelSkole(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.welcome}>Velkommen til Kvadraturen Vgs</AppText>

      <AppText style={styles.festival}>
        🎉 Vi kickstarter skoleåret med festival! Her finner du all
        informasjonen du trenger å vite om den store festen i Bendiksbukta.
      </AppText>
      <Image
        style={styles.logo}
        source={require("../assets/oppstartsfestivalen.png")}
      />
      <AppText style={styles.festival}>
        👋 Bli kjent på skolen via vår virutuelle digitale skole.
      </AppText>
      <Button
        title="Virtuell digital åpen skole "
        style={styles.button}
        onPress={() => {
          Linking.openURL("http://193.213.19.37/kva/");
        }}
      />
      <Image
        style={styles.image}
        source={require("../assets/virituelskole.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontWeight: "bold",
    margin: 20,
    fontSize: 20
  },
  description: {
    margin: 10,
    fontSize: 18
  },
  button: {
    fontSize: 10,
    backgroundColor: colors.secondary,
    height: 100,
    width: 100,
    color: colors.white
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: 200,
    marginBottom: 10,
    marginTop: 10
  },
  festival: {
    margin: 5,
    marginBottom: 0,
    fontWeight: "500"
  },
  logo: {
    width: "100%",
    height: 170,
    marginBottom: 10
  }
});

export default VirituelSkole;
