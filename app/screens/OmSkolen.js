import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";

import * as Linking from "expo-linking";

import colors from "../config/colors";
import Footer from "../components/Footer";
import Servicetorget from "../components/Servicetorget";
import Studieverksted from "../components/Studieverksted";
import Kantine from "../components/Kantine";
import Elevrad from "../components/Elevrad";

import YtButton from "../components/YtButton";
import AppText from "../components/AppText";
import InfoButton from "../components/InfoButton";

function OmSkolen({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <YtButton />

        <AppText style={styles.headerText}>
          🕖 Skolens inngangsdører er åpne mellom kl. 07.00 og 14.45, mandag til
          fredag.
        </AppText>
        <AppText style={styles.headerText}>📞 Telefon: 38 07 73 00</AppText>
        <View style={styles.container}>
          <Image style={styles.Line} source={require("../assets/Line.png")} />
          <AppText style={styles.headline}>
            Kart over skolens byggninger
          </AppText>
        </View>
        <Image style={styles.map} source={require("../assets/skolekart.png")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>
            👇 Klikk for å lese om skolen
          </AppText>

          <Servicetorget />
          <Kantine />
          <Studieverksted />
          <Elevrad />
          <InfoButton
            color="secondary"
            title="Utdannings Tilbud ↗️"
            onPress={() => {
              Linking.openURL("https://kvadraturen.vgs.no/utdanningstilbud/");
            }}
          />
          <AppText style={styles.headline}>Timeplan</AppText>
          <Image
            style={styles.timeplan}
            source={require("../assets/timeplan.png")}
          />
        </View>
        <Footer />
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
    fontSize: 25
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
    height: 80,
    marginBottom: 10,
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

export default OmSkolen;
