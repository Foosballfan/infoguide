import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Apptext from "../components/AppText";
import Screen from "../components/Screen";
import ImageView from "../components/ImageView";

function StudentWelcomeScreen(props) {
  return (
    <Screen>
      <ImageView />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue"
  }
});

export default StudentWelcomeScreen;
