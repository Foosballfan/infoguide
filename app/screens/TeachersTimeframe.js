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
        time: "23.08",
        title: "⚽️ Aktivitetsdag for VG2 + stho og 1id elever på Odderøya",
        description:
          "«Bli kjent dag»/Aktivitetsdag. Møt minst 15 min før elevene på aktivitetsdagen. Før dere møter elevene, må dere hente en konvolutt merket med klassenavnet i servicetorget. Der finner dere kart hvor de ulike postene er avmerket, kartet ligger også digitalt på teams under aktivitetsdager. Husk å følge «postruten» i den rekkefølge det står på arket. I konvolutten ligger det også et poengark, den totale poengsummen skal leveres digitalt på teams (Kvadraturen vgs > kanal: oppstart skoleåret 2021-22 > oppstartsfestival > aktivitetsdager – bli kjent dager 2021 > poeng på aktivitetsdagen). Nederst på arket, finner du info som må ut til elevene. Dere kan legge denne informasjonen ut på It`s, eller på annen måte få informert elevene. Vi ønsker at dere tar kontakt med elever som av ulike årsaker ikke kan komme seg rundt, og tar dette opp med avdelingsleder. Dette er en aktivitetsdag hvor hovedfokuset er å bli kjent med elevene/hverandre, teambuilding og gleden av å bevege seg i naturen, det er derfor viktig å ikke gå glipp av det sosiale! "
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
        time: "25.08",
        title: "🦺 HMS dager",
        description: "25 - 26 august. HMS dager for vg1 elever"
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
