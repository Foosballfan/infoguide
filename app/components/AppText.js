import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir"
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      }
    })
  }
});

export default AppText;
