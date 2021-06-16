import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

import Apptext from "./AppText";
import AppButton from "./AppButton";
import colors from "../config/colors";

function VirituelSkole(props) {
  return (
    <View style={styles.container}>
      <Apptext style={styles.welcome}>Velkommen til Kvadraturen Vgs</Apptext>
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
  }
});

export default VirituelSkole;
