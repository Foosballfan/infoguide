import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

import Screen from "../components/Screen";
import FestivalCover from "../components/FestivalCover";
import Artists from "../components/Artists";
import AppText from "../components/AppText";
import FestivalFooter from "../components/FestivalFooter";

function Festival(props) {
  return (
    <>
      <ScrollView>
        <Screen>
          <View style={styles.container}>
            <FestivalCover />
            <Artists />
            <View>
              <AppText style={styles.descText}> Oppstartsfestivalen</AppText>
              <AppText style={styles.infoText}>
                Kvadraturen videregående skole skal igjen arrangere den flotte
                oppstartsfestivalen, som en skikkelig kick off på skoleåret
                2021/2022. Vi har samlet både lokale og nasjonale artister for å
                sette standarden på et givende år, fullt av samhold og
                engasjement. Det blir konserter, underholdning, sommeridyll og
                mange vennlige fjes som ønsker deg velkommen til en ny tid på
                kvadda. Vi kan love deg at denne festivalen ikke er noe du vil
                gå glipp av, så vi ses fredag 20. august mellom 12:00-15:00 i
                nydelige bendiksbukta!
              </AppText>
              <AppText style={styles.descText}> Program</AppText>

              <AppText style={styles.infoText}>
                Kl 19:00 Kjartan Lauritzen
              </AppText>
              <AppText style={styles.infoText}>Kl 20:00 Sebastian Zalo</AppText>

              <AppText style={styles.descText}> Hvor</AppText>
              <AppText style={styles.infoText}>Beniksbukta (kart)</AppText>
              <AppText style={styles.descText}> Sponsorer</AppText>
              <AppText style={styles.infoText}>Kuholmen cash</AppText>
            </View>
          </View>
        </Screen>
        <FestivalFooter />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD961"
  },
  descText: {
    color: "#C00000",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
    margin: 5,
    marginTop: 15
  },
  infoText: {
    marginHorizontal: 10,
    fontSize: 17
  }
});

export default Festival;
