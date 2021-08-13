import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";

import * as Linking from "expo-linking";

import colors from "../config/colors";
import FooterTeacher from "../components/FooterTeacher";
import Servicetorget from "../components/Servicetorget";
import Studieverksted from "../components/Studieverksted";
import Kantine from "../components/Kantine";
import Elevrad from "../components/Elevrad";

import YtButton from "../components/YtButton";
import AppText from "../components/AppText";
import InfoButton from "../components/InfoButton";
import GenerellButton from "../components/GenerellButton";

function OmSkolenTeacher({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primaryLight }}>
        <YtButton />
        <AppText style={styles.headline}>
          Om Kvadraturen{"\n"}Videregående skole
        </AppText>
        <Image
          style={styles.Line}
          source={require("../assets/LineGreen.png")}
        />
        <View style={styles.container}>
          <AppText style={styles.headlinedesc}>
            👇 Klikk for å lese om skolen
          </AppText>

          <Servicetorget />
          <Kantine />
          <Studieverksted />
          <Elevrad />
          <GenerellButton />
          <InfoButton
            color="secondary"
            title="Utdannings Tilbud ↗️"
            onPress={() => {
              Linking.openURL("https://kvadraturen.vgs.no/utdanningstilbud/");
            }}
          />
          <Image
            style={styles.Line}
            source={require("../assets/LineGreen.png")}
          />
          <AppText style={styles.headline}>Kart over skolens bygninger</AppText>
        </View>
        <Image style={styles.map} source={require("../assets/skolekart.png")} />

        <View style={styles.container}>
          <AppText style={styles.headline}>Timeplan</AppText>
          <Image
            style={styles.timeplan}
            source={require("../assets/timeplangronn.jpg")}
          />
        </View>
        <FooterTeacher />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headline: {
    marginHorizontal: 10,
    marginTop: 10,

    fontSize: 25,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  headlinedesc: {
    fontSize: 22,
    margin: 5,
    fontWeight: "500"
  },
  text: {
    marginTop: 20,
    fontSize: 20
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  map: {
    flex: 1,
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 5
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 50,
    marginBottom: 10,
    marginTop: 10,
    resizeMode: "contain"
  },
  headerText: {
    fontSize: 18,
    margin: 10
  },
  timeplan: {
    flex: 1,
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginBottom: 5
  }
});

export default OmSkolenTeacher;
