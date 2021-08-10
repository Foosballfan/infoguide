import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Timeline from "react-native-timeline-flatlist";

import colors from "../config/colors";

export default class TeachersTimeframe extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: "13.08",
        title: "🧮 Planleggingsdager",
        description: "Eget program fra 13 til 18 august."
      },
      {
        time: "19.08",
        title: "🎓 Skolestart",
        description: "Kl. 09.00 VG1 - Kl. 10.00 VG2 - Kl. 11.00 VG3"
      },
      {
        time: "20.08",
        title: "🎉Oppstartsfestival",
        description:
          "Vi kickstarter skoleåret med festival fra kl 12:00 - 15:00 i Bendiksbukta! Du finner all informasjonen du trenger på festivalsiden."
      },
      {
        time: "22.08",
        title: "⚽️ Aktivitetsdag for vg2 elever på Odderøya",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net."
      },
      {
        time: "22.08",
        title: "📚 Bokutlevering alle klasser",
        description:
          "Fra 22 til 25 august kan alle trinn og klasser hente bøker på studieværkstedet"
      },
      {
        time: "23.08",
        title: "⚽️ Aktivitetsdag for vg1 elever på Odderøya",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net."
      },

      {
        time: "22.08",
        title: "📸 Elevfotografering alle klasser",
        description: "22 til 25 august skjer det fotografering av elevene"
      },
      {
        time: "22.08",
        title: "🦺 HMS dager",
        description: "HMS dager for vg1 elever"
      },
      {
        time: "Uke 36",
        title: "📊 Valg",
        description:
          "Valg av klassetillitselev og valg av avdelingselevråd og elevrådsstyre"
      },
      {
        time: "Uke 37",
        title: "🎒 Elevsamtaler",
        description: "Uke 37-39"
      },
      {
        time: "Uke 39",
        title: "📈 Oppstart fagsamtaler"
      },
      {
        time: "Uke 40",
        title: "🍁 Høstferie"
      },
      {
        time: "10.10",
        title: "🌹 Verdens psykiske helsedag"
      },
      {
        time: "22.10",
        title: "💼 Planleggingsdag",
        description: "Sørlandske lærerstevne"
      },
      {
        time: "Uke 43",
        title: "👩‍🏫 Foreldre konferanser"
      }
    ];
  }

  render() {
    //'rgb(45,156,219)'
    return (
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
  list: {
    flex: 1,

    marginBottom: 50
  }
});
