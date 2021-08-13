import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import * as Linking from "expo-linking";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Footer from "../components/Footer";

import InfoButton from "../components/InfoButton";

function KontaktScreen({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image style={styles.cover} source={require("../assets/kvadda3.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>
            Kvadraturen{"\n"}Videregående skole
          </AppText>

          <AppText style={styles.headlineText}>
            🕖 Skolens inngangsdører er åpne mellom kl. 07.00 og 14.45, mandag
            til fredag.
          </AppText>
          <TouchableOpacity onPress={() => Linking.openURL("tel:38 07 73 00")}>
            <AppText style={{ color: "green" }}>
              📞 Telefon: 38 07 73 00
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:kontakt@kvadraturen.vgs.no")}
          >
            <AppText style={{ color: "blue" }}>
              ✉️ Email: kontakt@kvadraturen.vgs.no
            </AppText>
          </TouchableOpacity>
          <AppText style={styles.headlineText}>
            📍 Tollbodgata 75 4614 Kristiansand{" "}
          </AppText>
        </View>

        <View style={styles.container}>
          <AppText style={styles.headlineText}>
            👇 Lenker til våre ansatte
          </AppText>
          <InfoButton
            color="secondary"
            title="ledelsen"
            onPress={() => navigation.navigate("LedelsenStudent")}
          />
          <InfoButton
            color="secondary"
            title="rådgivere ↗️"
            onPress={() =>
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/"
              )
            }
          />
          <InfoButton
            color="secondary"
            title="IT-Avdelingen ↗️"
            onPress={() =>
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/skolehverdag/ikt/"
              )
            }
          />
          <InfoButton
            color="secondary"
            title="Skolehelsetjenesten"
            onPress={() => navigation.navigate("HelseScreen")}
          />
          <InfoButton
            color="secondary"
            title="Miljøteam"
            onPress={() => navigation.navigate("MiljoScreen")}
          />
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
  headline: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 15,
    textTransform: "uppercase",
    letterSpacing: 1
  },
  cover: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  headlineText: {
    fontSize: 20,
    marginBottom: 5
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },

  image: {
    width: "100%",
    height: 250,
    margin: 10,
    borderRadius: 10
  }
});

export default KontaktScreen;
