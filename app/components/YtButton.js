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
          style={{ width: "100%", height: 210, resizeMode: "contain" }}
          source={require("../assets/kvaddaYT.png")}
        />
      </TouchableOpacity>
      <AppText style={styles.text}>
        🎬 Se video for å bli kjent med skolen
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    justifyContent: "center",
    marginHorizontal: 10
  }
});

export default YtButton;
