import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

import * as Linking from "expo-linking";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Footer from "../components/Footer";
import Servicetorget from "../components/Servicetorget";
import Studieverksted from "../components/Studieverksted";
import Kantine from "../components/Kantine";
import Elevrad from "../components/Elevrad";
import FunFact from "../components/FunFacts";
import YtButton from "../components/YtButton";
import AppText from "../components/AppText";
import InfoButton from "../components/InfoButton";

function OmSkolen({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <YtButton />
        <View style={styles.container}>
          <Image style={styles.Line} source={require("../assets/Line.png")} />
          <AppText style={styles.headline}>
            Kart over skolens byggninger
          </AppText>
          <Image
            style={styles.map}
            source={require("../assets/skolekart.png")}
          />
          <AppText style={styles.headline}>
            👇 Klikk for å lese om skolen
          </AppText>

          <FunFact />
          <Servicetorget />
          <Kantine />
          <Studieverksted />
          <Elevrad />

          <InfoButton
            color="secondary"
            title="Utdannings Tilbud"
            onPress={() => {
              Linking.openURL("https://kvadraturen.vgs.no/utdanningstilbud/");
            }}
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
    height: 200,
    borderRadius: 25,
    marginBottom: 20
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 80,
    marginBottom: 10,
    resizeMode: "contain"
  }
});

export default OmSkolen;
