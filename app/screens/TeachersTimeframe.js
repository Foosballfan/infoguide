import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Timeline from "react-native-timeline-flatlist";

import colors from "../config/colors";
import AppText from "../components/AppText";
import * as Linking from "expo-linking";

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
        time: "19.08",
        title: "👫 Makkerskap",
        description:
          "Når du begynner på Kvadraturen vgs blir du automatisk med på en makkerordning. Klassen deles inn i par (makkerpar) fra første dag, og hvert makkerpar inngå i en gruppe med et annet makkerpar – og utgjør en makkergruppe. Parene og gruppene holder sammen i tre uker, og makkerperioden varer i minst 9 uker. Alle lærerne i klassen er med på ordningen. Makkere skal samarbeide i klasserommet, være generelt ekstra oppmerksomme på hverandre og si ifra om det oppstår mistrivsel. Dette gjør vi for å skape inkludering, fellesskap, relasjoner, m.m."
      },
      {
        time: "20.08",
        title: "🎉Oppstartsfestival",
        description:
          "Vi kickstarter skoleåret med festival fra kl 12:00 - 15:00 i Bendiksbukta! Du finner all informasjonen du trenger på festivalsiden."
      },
      {
        time: "!",
        title: "👥 Mentor samtaler",
        description:
          "Kvadraturen skolesenter tilbyr mentoring til sine nyansatte. Mentoring er i utgangspunktet en støtte til nye lærere. Opplegget går over to år og består av både individuell veiledning og gruppeveiledning, samt observasjon i klasserommet. Ved å bruke mentorer i et fast opplegg, ivaretar vi våre nye lærere på en god måte. Den nye læreren får støtte og hjelp gjennom samtaler og observasjon i klasserommet, og Kvadraturen videregående får gode og fornøyde lærere. "
      },
      {
        time: "23.08",
        title: "💛 Bli kjent dag for VG2 + stho og 1id elever på Odderøya",
        description:
          "«Bli kjent dag»/Aktivitetsdag. Møt minst 15 min før elevene på aktivitetsdagen. Før dere møter elevene, må dere hente en konvolutt merket med klassenavnet i servicetorget. Der finner dere kart hvor de ulike postene er avmerket, kartet ligger også digitalt på teams under aktivitetsdager. Husk å følge «postruten» i den rekkefølge det står på arket. I konvolutten ligger det også et poengark, den totale poengsummen skal leveres digitalt på teams (Kvadraturen vgs > kanal: oppstart skoleåret 2021-22 > oppstartsfestival > aktivitetsdager – bli kjent dager 2021 > poeng på aktivitetsdagen). Nederst på arket, finner du info som må ut til elevene. Dere kan legge denne informasjonen ut på It`s, eller på annen måte få informert elevene. Vi ønsker at dere tar kontakt med elever som av ulike årsaker ikke kan komme seg rundt, og tar dette opp med avdelingsleder. Dette er en aktivitetsdag hvor hovedfokuset er å bli kjent med elevene/hverandre, teambuilding og gleden av å bevege seg i naturen, det er derfor viktig å ikke gå glipp av det sosiale! "
      },
      {
        time: "23.08",
        title: "💛 Bli kjent dag for vg1 elever på Odderøya",
        description: "Se beskrivelse over"
      },
      {
        time: "!",
        title: "💻 PC",
        description:
          "Skole pc til elever kommer rundt høstferien. I mellomtiden ønsker vi at de elevene som har mulighet tar med egen pc hjemmefra. "
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
        time: "25.08",
        title: "🦺 HMS dager",
        description: "25- 26 august. HMS dager for Ho, Tif og elektro"
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
