import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import AppText from "../components/AppText";

function ImageButton({ onPress, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: "100%", height: 163 }}
          source={require("../assets/oppstartsfestivalen.png")}
        />
      </TouchableOpacity>
      <AppText style={styles.text}>
        🎉 Vi kickstarter skoleåret med festival! Her finner du all
        informasjonen du trenger å vite om den store festen i Bendiksbukta.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default ImageButton;
