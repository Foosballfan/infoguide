import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Avenir"
  }
});

export default AppText;
