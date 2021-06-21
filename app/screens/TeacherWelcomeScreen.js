import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ImageView from "../components/ImageView";
import FooterTeacher from "../components/FooterTeacher";
import VirituelSkole from "../components/VirituelSkole";
import colors from "../config/colors";

function StudentWelcomeScreen(props) {
  return (
    <>
      <ScrollView style={styles.container}>
        <VirituelSkole />
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

export default StudentWelcomeScreen;
