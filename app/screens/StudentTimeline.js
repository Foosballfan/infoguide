import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Timeline from "react-native-timeline-flatlist";

import colors from "../config/colors";
import AppText from "../components/AppText";
import * as Linking from "expo-linking";

export default class Example extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: "19.08",
        title: "🎓 Første skoledag",
        description: "Kl. 09.00 VG1 - Kl. 10.00 VG2 - Kl. 11.00 VG3 "
      },

      {
        time: "19.08",
        title: "👫 Makkerpar",
        description: "Alle elever blir delt inn i makkerpar."
      },
      {
        time: "20.08",
        title: "🎉Oppstartsfestival",
        description:
          "Vi kickstarter skoleåret med festival fra kl 12:00 - 15:00 i Bendiksbukta! Du finner all informasjonen du trenger på festivalsiden."
      },
      {
        time: "23.08",
        title: "📚 Bokutlevering alle klasser",
        description:
          "Fra 23 til 26 august kan alle trinn og klasser hente bøker på studieværkstedet"
      },

      {
        time: "23.08",
        title: "📸 Elevfotografering alle klasser",
        description: "23 til 27 august skjer det fotografering av elevene"
      },
      {
        time: "23.08",
        title: "💛 Bli kjent dag for vg2, stho og 1id elever på Odderøya"
      },
      {
        time: "24.08",
        title: "💛 Bli kjent dag  for vg1 + HT  elever på Odderøya"
      },
      {
        time: "!",
        title: "💻 PC",
        description:
          "Skole pc til elever kommer rundt høstferien. I mellomtiden ønsker vi at de elevene som har mulighet tar med egen pc hjemmefra. "
      },
      {
        time: "25.08",
        title: "🦺 HMS dager",
        description: " 25- 26 august. HMS dager for Ho, Tif og elektro "
      },
      {
        time: "07.09",
        title: "📣 Skoledebatt",
        description: "Kl 09.00 – 1 debatt, Kl 10.30 – 2 debatt"
      },
      {
        time: "07.09",
        title: "📮 Skolevalg",
        description: "Skolevalget skal være utført innen 7. september."
      }
    ];
  }

  render() {
    return (
      <>
        <View style={styles.containerDesc}>
          <AppText>Finn de relevante tidspunktene for din klasse:</AppText>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/oppstartsfestival-info-om-aktiviteter/"
              );
            }}
          >
            <AppText style={{ color: "blue" }}>👋 Her</AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Timeline
            style={styles.list}
            data={this.data}
            separator={true}
            circleSize={20}
            circleColor={colors.primary}
            lineColor={colors.primary}
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{
              textAlign: "center",
              backgroundColor: colors.secondary,
              color: "white",
              padding: 5,
              borderRadius: 13,
              overflow: "hidden"
            }}
            descriptionStyle={{ color: "gray" }}
            options={{
              style: { paddingTop: 5 }
            }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 15,
    backgroundColor: "white"
  },
  containerDesc: {
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    flex: 1,
    marginBottom: 50
  }
});
