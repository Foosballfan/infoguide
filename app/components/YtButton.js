import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import AppText from "../components/AppText";

function YtButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.youtube.com/watch?v=lEULLpsuK1I");
        }}
      >
        <Image
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
          source={require("../assets/kvaddaYT.png")}
        />
      </TouchableOpacity>
      <AppText style={styles.text}>
        🎬 Bli kjent på skolen gjennom Kvadraturens YouTube video
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    margin: 10
  }
});

export default YtButton;
