import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import Screen from "../components/Screen";
import ImageView from "../components/ImageView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VirituelSkole from "../components/VirituelSkole";

function StudentWelcomeScreen(props) {
  return (
    <>
      <ScrollView>
        <VirituelSkole />
        <ImageView />
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue"
  }
});

export default StudentWelcomeScreen;
