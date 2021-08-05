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
import RektorButton from "../components/RektorButton";
import InfoButton from "../components/InfoButton";

function KontaktScreen({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image style={styles.cover} source={require("../assets/kvadda3.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>
            Kvadraturen Vidregående Skole
          </AppText>

          <TouchableOpacity onPress={() => Linking.openURL("tel:38 07 73 00")}>
            <AppText style={{ color: "green" }}>
              📞 Telefon: 38 07 73 00
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:kontakt@kvadraturen.vgs.no")}
          >
            <AppText style={{ color: "blue" }}>
              ✉️ Email: kontakt@kvadraturen.vgs.no
            </AppText>
          </TouchableOpacity>
          <AppText style={styles.headlineText}>
            📍 Tollbodgata 75 4614 Kristiansand{" "}
          </AppText>
        </View>
        <RektorButton />
        <View style={styles.container}>
          <AppText style={styles.headlineText}>
            👇 Lenker til våre ansatte
          </AppText>
          <InfoButton
            color="secondary"
            title="ledelsen ↗️"
            onPress={() =>
              Linking.openURL(
                "https://kvadraturen.vgs.no/skolen-var/om-skolen/ledelsen/"
              )
            }
          />
          <InfoButton
            color="secondary"
            title="rådgivere ↗️"
            onPress={() =>
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/radgivere/"
              )
            }
          />
          <InfoButton
            color="secondary"
            title="Skolehelsetjenesten ↗️"
            onPress={() =>
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/skolehelsetjenesten/"
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
    fontWeight: "500",
    marginBottom: 15
  },
  cover: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
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
    height: 250,
    margin: 10,
    borderRadius: 10
  }
});

export default KontaktScreen;
