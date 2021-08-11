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

import AppText from "../components/AppText";
import VismaButton from "../components/VismaButton";
import TeamsButton from "../components/TeamsButton";
import ItsButton from "../components/ItsButton";
import DivButton from "../components/DivButton";
import FooterTeacher from "../components/FooterTeacher";

function InfoScreenTeacher(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primaryLight }}>
        <Image style={styles.cover} source={require("../assets/tools.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>Skolens brukerverktøy</AppText>
          <AppText style={styles.text}>
            👇 Klikk på ikonene for å logge inn eller lese mer
          </AppText>
          <View style={styles.buttons}>
            <VismaButton />
            <TeamsButton />
            <ItsButton />
            <DivButton />
          </View>
          <AppText style={styles.text}>
            Andre linker til brukerverktøy kan du finne inne på {"\n"}Teams ->
            Kvadraturen VGS -> Filer ->{"\n"}Informasjon og Brukerveiledninger
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
    marginBottom: 15,
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
  buttons: {
    marginBottom: 40
  }
});

export default InfoScreenTeacher;
