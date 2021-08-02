import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Linking from "expo-linking";

import AppText from "../components/AppText";

function VirituellButton({ onPress, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("http://193.213.19.37/kva/");
        }}
      >
        <Image
          style={{ width: "100%", height: 200, borderRadius: 20 }}
          source={require("../assets/virituelskole.png")}
        />
      </TouchableOpacity>
      <AppText style={styles.text}>
        👋 Bli kjent på skolen via vår virutuelle digitale skole.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  text: {
    marginTop: 10
  }
});

export default VirituellButton;
