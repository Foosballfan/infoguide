import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

import * as Linking from "expo-linking";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Footer from "../components/Footer";

function Facts(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image style={styles.cover} source={require("../assets/glass.png")} />
        <View style={styles.container}>
          <AppText style={styles.header}>Diverse fakta 🔎</AppText>
          <AppText style={styles.headerText}>
            👇 Trykk for å bestille Kvadraturens skolegensere allerede nå!
          </AppText>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://kvadraturen.vgs.no/aktuelt/skolegensere.33615.aspx"
              );
            }}
          >
            <Image
              style={styles.imageGenser}
              source={require("../assets/skolegenser.jpg")}
            />
          </TouchableOpacity>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />
          <AppText style={styles.headerText}>
            🚌 Du har rett til fri skoleskyss når avstand mellom hjem og skole
            er mer enn 6 km. Elevene skal selv søke om ordinær skoleskyss til
            videregående skole via FSkyss.
          </AppText>
          <TouchableOpacity
            style={styles.headerText}
            onPress={() =>
              Linking.openURL(
                "https://skoleskyss.akt.no/Account/Login?ReturnUrl=/"
              )
            }
          >
            <AppText style={{ color: "blue" }}>Søk her</AppText>
          </TouchableOpacity>
          <Image
            style={styles.Line}
            source={require("../assets/LineSpin.png")}
          />
          <AppText style={styles.headerText}>
            ✨ Elever med sykdom/funksjonshemming som har betydning for
            skolegangen må gjøre dette kjent for kontaktlærer eller rådgiver.
            Skolen vil da tilpasse opplæringen for deg. Har du fysisk
            funksjonshemming som gjør at du ikke kan gå i trapper, kan du få
            heiskort for å bruke heisene. Kontakt servicetorget!
          </AppText>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />
          <AppText style={styles.headerText}>
            🎓 Fra skoleåret 2021/2022 innfører Agder fylkeskommune et felles
            digitalt skolebevis for sine elever og studenter. Digitalt
            skolebevis er en del av Visma InSchool (VIS) appen, og pålogging til
            skolebeviset følger appen.
          </AppText>
        </View>

        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start"
  },
  cover: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 20
  },
  header: {
    fontSize: 25,
    fontWeight: "500",
    margin: 10
  },
  text: {
    fontSize: 22,
    marginBottom: 15
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 50,
    margin: 5,
    resizeMode: "contain"
  },

  headerText: {
    fontSize: 18,
    margin: 10
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10
  },
  imageGenser: {
    width: "95%",
    height: 250,
    resizeMode: "cover",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginLeft: 0
  }
});

export default Facts;
