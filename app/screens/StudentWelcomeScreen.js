import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Apptext from "../components/AppText";
import Screen from "../components/Screen";

function StudentWelcomeScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/books-computer.jpg")}
        />
        <View style={styles.detailsContainer}>
          <Apptext style={styles.title}>Henting av Bøker og PC</Apptext>
          <Apptext style={styles.subTitle}>
            Nå kan du hente bøker og pc på biblioteket. Sjekk oversikt over når
            din klasse kan hente.
          </Apptext>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  subTitle: {
    color: "gray",
    fontSize: 20,
    marginVertical: 10
  }
});

export default StudentWelcomeScreen;
