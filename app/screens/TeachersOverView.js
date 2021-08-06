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
import YtVismaButton from "../components/YtVismaButton";
import FooterTeacher from "../components/FooterTeacher";

function TeachersOverView(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primaryLight }}>
        <Image style={styles.cover} source={require("../assets/hvemhva.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.headline}>Hvem gjør hva ?</AppText>

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
    fontSize: 30,
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
  Points: {
    marginBottom: 10,
    fontWeight: "500"
  }
});

export default TeachersOverView;
