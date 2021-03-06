import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import Screen from "../components/Screen";
import FestivalCover from "../components/FestivalCover";
import Artists from "../components/Artists";
import AppText from "../components/AppText";
import FestivalFooter from "../components/FestivalFooter";
import colors from "../config/colors";

function Festival(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.yellow }}>
        <FestivalCover />
        <Artists />

        <View>
          <AppText style={styles.descText}> Oppstartsfestivalen</AppText>
          <AppText style={styles.infoText}>
            Kvadraturen videregående skole skal igjen arrangere den flotte
            oppstartsfestivalen, som en skikkelig kick off på skoleåret
            2021/2022. To av våre elever, Sebastian og Thomas, skal ta dere med
            gjennom en samling av nasjonale artister for å sette standarden på
            et givende år, fullt av samhold og engasjement. Det blir konserter,
            underholdning, sommeridyll, digg mat og mangexe vennlige fjes som
            ønsker deg velkommen til en ny tid på Kvadraturen. Vi kan love deg
            at denne festivalen ikke er noe du vil gå glipp av. Vi ses fredag
            20. august mellom kl 12:00 og kl 15:00 i nydelige bendiksbukta!
          </AppText>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://open.spotify.com/playlist/3V2AIyMCnX2RdKi39pWCkC?si=T-xjdk0DRQ26xhCD-W4kYg&dl_branch=1&nd=1"
                )
              }
            >
              <MaterialCommunityIcons
                name="spotify"
                size={90}
                color={colors.darkBlue}
              />
            </TouchableOpacity>
            <View style={styles.spotify}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://open.spotify.com/playlist/3V2AIyMCnX2RdKi39pWCkC?si=T-xjdk0DRQ26xhCD-W4kYg&dl_branch=1&nd=1"
                  )
                }
              >
                <AppText style={styles.spotifyText}>
                  Lytt til årest artister
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
          <AppText style={styles.descText}> Program</AppText>

          <AppText style={styles.infoText}>Kl 12:00 - Kl 15:00</AppText>

          <AppText style={styles.descText}> Hvor</AppText>
          <AppText style={styles.infoText}>Bendiksbukta, Odderøya</AppText>
        </View>

        <Image style={styles.imageMap} source={require("../assets/kart.jpg")} />
        <View>
          <AppText style={styles.descText}> Sponsorer</AppText>

          <View style={styles.spons}>
            <Image
              style={styles.image}
              source={require("../assets/norgesenergi.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/bilfag.png")}
            />
          </View>
          <View style={styles.spons}>
            <Image
              style={styles.image}
              source={require("../assets/maritim-logo.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/OTEKlogo.png")}
            />
          </View>
          <View style={styles.spons}>
            <Image
              style={styles.image}
              source={require("../assets/elofsor.jpg")}
            />
            <Image
              style={styles.image}
              source={require("../assets/fagOpplaering.png")}
            />
          </View>
          <View style={styles.spons}>
            <Image
              style={styles.image}
              source={require("../assets/opplaeringskontoret.jpg")}
            />
          </View>
        </View>

        <FestivalFooter />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },

  infoText: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 5
  },
  spons: {
    position: "relative",
    flexDirection: "row",
    margin: 5,
    padding: 0
  },

  image: {
    flex: 1,
    width: "100%",
    height: 70,
    margin: 5,
    resizeMode: "contain"
  },
  imageMap: {
    width: "100%",
    height: 300,
    resizeMode: "contain"
  },
  row: {
    flexDirection: "row",
    margin: 10
  },
  spotify: {
    justifyContent: "center",
    alignItems: "center"
  },
  spotifyText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.darkBlue,
    textTransform: "uppercase"
  },
  descText: {
    fontSize: 23,
    color: "#C00000",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 5
  }
});

export default Festival;
