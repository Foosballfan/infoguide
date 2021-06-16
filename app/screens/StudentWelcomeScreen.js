import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ImageView from "../components/ImageView";
import Header from "../components/Header";
import Footer from "../components/Footer";

function StudentWelcomeScreen(props) {
  return (
    <>
      <Header />
      <ImageView />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue"
  }
});

export default StudentWelcomeScreen;
