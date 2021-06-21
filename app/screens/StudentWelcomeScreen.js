import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import ImageView from "../components/ImageView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VirituelSkole from "../components/VirituelSkole";
import AppNavigator from "../navigation/AppNavigator";

function StudentWelcomeScreen(props) {
  return (
    <>
      <ScrollView style={styles.container}>
        <VirituelSkole />
        <ImageView />
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryLight
  }
});

export default StudentWelcomeScreen;
