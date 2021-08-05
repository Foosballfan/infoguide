import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import AppText from "../components/AppText";

function YtVismaButton() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        Videoen varer i kun 6 minutter og går igjennom de viktigste funksjonene
        i Visma InSchool og gjør deg klar til å ta i bruk systemet.
      </AppText>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.youtube.com/watch?v=vJBEy9r3-b4");
        }}
      >
        <Image
          style={{ width: "100%", height: 210, resizeMode: "contain" }}
          source={require("../assets/vismaVid.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    margin: 0
  }
});

export default YtVismaButton;
