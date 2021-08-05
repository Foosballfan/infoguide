import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import * as Linking from "expo-linking";
import Unorderedlist from "react-native-unordered-list";

import colors from "../config/colors";
import Footer from "../components/Footer";
import AppText from "../components/AppText";
import YtVismaButton from "../components/YtVismaButton";

function InfoScreen(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image style={styles.cover} source={require("../assets/tools.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>🛠 Skolens brukerverktøy</AppText>
          <AppText style={styles.text}>
            👇 Klikk på ikonene for å logge inn eller lese mer
          </AppText>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://kvadraturen.vgs.no/for-elever/skolehverdag/visma-inschool/"
                );
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/visma.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://agder.itslearning.com");
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/Itslearning.png")}
              />
            </TouchableOpacity>
          </View>

          <AppText style={styles.headlineDesc}>🎓 Visma InSchool</AppText>
          <AppText style={styles.text}>
            Agder fylkeskommune tar i bruk Visma InSchool (VIS) som sitt
            skoleadministrative system fra skoleåret 2021/2022.
          </AppText>
          <AppText style={styles.headlineDesc}>
            🤔 Hva er Visma InSchool ?
          </AppText>
          <AppText style={styles.text}>
            Visma InSchool er et skoleadministrativt system som skal bidra til
            forenkling og effektivisering av skolehverdagen for elever,
            foresatte og skolenes medarbeidere.
          </AppText>
          <AppText style={styles.headlineDesc}>🎬 Introduksjonsvideo</AppText>

          <YtVismaButton />
          <AppText style={styles.headlineDesc}>
            👋 VIS vil bli det viktigste systemet du bruker i din skolehverdag
          </AppText>
          <AppText style={styles.text}>
            Du bør logge deg inn på VIS daglig. Her finner du de viktigste
            opplysningene du trenger i skolehverdagen, blant annet:
          </AppText>
          <Unorderedlist>
            <AppText style={styles.Points}>Timeplanen din</AppText>
          </Unorderedlist>
          <Unorderedlist>
            <AppText style={styles.Points}>Informasjon om klassen din</AppText>
          </Unorderedlist>
          <Unorderedlist>
            <AppText style={styles.Points}>Kontaktlærer og faglærere</AppText>
          </Unorderedlist>
          <Unorderedlist>
            <AppText style={styles.Points}>Anmerkninger</AppText>
          </Unorderedlist>
          <Unorderedlist>
            <AppText style={styles.Points}>
              Oversikt over alle vurderinger
            </AppText>
          </Unorderedlist>
          <Unorderedlist>
            <AppText style={styles.Points}>Eksamensoppmeldinger</AppText>
          </Unorderedlist>
          <Unorderedlist>
            <AppText style={styles.Points}>
              Standpunkt- og eksamenskarakterer
            </AppText>
          </Unorderedlist>
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
    fontWeight: "500",
    marginBottom: 15
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
    marginBottom: 5
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
    marginBottom: 10,
    fontWeight: "500"
  }
});

export default InfoScreen;
