import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Footer from "../components/Footer";
import Unorderedlist from "react-native-unordered-list";

function AktiviteterLunsj(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image style={styles.cover} source={require("../assets/games.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>Aktiviteter i Lunsjen</AppText>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />

          <AppText style={styles.text}>
            Miljøteamet vil stå for ulike aktiviteter i lunsjen gjennom dagene
            som kommer. Mer info om dette kommer på skjermene som henger rundt
            på skolen, så følg med – det blir gøy!
          </AppText>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "flex-start"
  },
  cover: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  headline: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 1
  },
  headlineDesc: {
    fontSize: 23,
    fontWeight: "500"
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10
  },
  imageContainer: {
    alignContent: "center",
    justifyContent: "center"
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 60,
    margin: 10,
    resizeMode: "contain"
  },
  Points: {
    marginBottom: 10
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginVertical: 10
  }
});

export default AktiviteterLunsj;
