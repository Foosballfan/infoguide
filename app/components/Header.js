import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

const images = [
  { id: 1, uri: require("../assets/thea.jpg") },
  { id: 2, uri: require("../assets/thea.jpg") },
  { id: 3, uri: require("../assets/thea.jpg") },
  { id: 4, uri: require("../assets/thea.jpg") }
];

function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.text}>Elever</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    left: 0,
    right: 0,
    top: 0,
    height: 90,
    backgroundColor: colors.primary,
    zIndex: 100,
    elevation: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    letterSpacing: 3,
    textTransform: "uppercase"
  }
});

export default Header;
