import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Unorderedlist from "react-native-unordered-list";
import FooterTeacher from "../components/FooterTeacher";

function SosialeAktiviteter(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primaryLight }}>
        <Image style={styles.cover} source={require("../assets/yoga.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>Sosiale Aktiviteter</AppText>

          <Image
            style={styles.Line}
            source={require("../assets/LineGreen.png")}
          />
          <AppText style={styles.text}>
            Det er viktig å trives på jobben. Både med arbeidsoppgaver og med
            kollegaene. I tillegg til julebord, juletrefest og sommerfest, har
            vi mange forskjellige aktiviteter og sosiale tilbud til skolens
            ansatte. For eksempel: volleyball, yoga, spinning, vandretur,
            skitur, zumba. Så når personalforeningen innkaller til møte, er det
            lurt å delta!
          </AppText>
        </View>
        <FooterTeacher />
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
    marginBottom: 15
  },
  image: {
    width: "100%",
    height: 200,
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

  Line: {
    flex: 1,
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginVertical: 10
  },
  Points: {
    marginBottom: 10,
    fontWeight: "500"
  }
});

export default SosialeAktiviteter;
