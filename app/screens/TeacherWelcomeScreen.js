import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";

import ImageView from "../components/ImageView";
import FooterTeacher from "../components/FooterTeacher";

import colors from "../config/colors";

function TeacherwelcomeScreen(props) {
  return (
    <>
      <Text>hei på deg hei </Text>
      <ScrollView style={styles.container}>
        <ImageView />
        <FooterTeacher />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight
  }
});

export default TeacherwelcomeScreen;
