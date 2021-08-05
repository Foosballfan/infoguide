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

import AppText from "../components/AppText";
import colors from "../config/colors";
import Footer from "../components/Footer";
import GreteButton from "../components/GreteButton";

function HelseScreen(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image style={styles.cover} source={require("../assets/snakke.jpg")} />
        <View style={styles.container}>
          <AppText style={styles.header}>Skolehelsetjenesten</AppText>
          <AppText style={styles.text}>
            Skolehelsetjenesten er et åpent tilbud til alle elevene ved skolen
            og består av to helsesykepleiere.
          </AppText>
          <AppText style={styles.text}>
            Vår oppgave som helsesykepleiere er å drive helsefremmende og
            forebyggende arbeid i skolen. Du kan ta kontakt for samtale, råd og
            veiledning i forhold til fysisk, psykisk og seksuell helse. Vi har
            taushetsplikt.
          </AppText>
          <AppText style={styles.text}>
            Du er velkommen til å ta kontakt for timebestilling på SMS eventuelt
            Drop-in. Vi følger retningslinjene for godt smittevern.
          </AppText>
          <AppText style={styles.text}>
            Åpningstider for elever: Hver dag fra kl 09.00-15.00, på kontorer i
            B-blokka (rom nr. B109 A og B109 B)
          </AppText>
        </View>

        <GreteButton />
        <View style={styles.container}>
          <View>
            <AppText style={styles.Points}>
              Skolehelsetjenestens oppgaver er:
            </AppText>
            <Unorderedlist>
              <AppText style={styles.Points}>
                Oppfølging av elever med psykiske vansker.
              </AppText>
            </Unorderedlist>
            <Unorderedlist>
              <AppText style={styles.Points}>
                Samtaler i forhold til trivsel, selvtillit, press, identitet
              </AppText>
            </Unorderedlist>
            <Unorderedlist>
              <AppText style={styles.Points}>
                Samtaler og evt. hjelp videre i forhold til rusproblematikk.
              </AppText>
            </Unorderedlist>
            <Unorderedlist>
              <AppText style={styles.Points}>Prevensjonsveiledning</AppText>
            </Unorderedlist>
            <Unorderedlist>
              <AppText style={styles.Points}>
                Fysiske forhold som stell av sår, fjerne sting, vurdere skader
              </AppText>
            </Unorderedlist>
            <Unorderedlist>
              <AppText style={styles.Points}>
                Testing og behandling av kjønnssykdommer
              </AppText>
            </Unorderedlist>
            <Unorderedlist>
              <AppText style={styles.Points}>
                Arbeid med elever som holder på å droppe ut av skolen
              </AppText>
            </Unorderedlist>
            <Image
              style={styles.Line}
              source={require("../assets/LineThin.png")}
            />
            <AppText style={styles.Points}>
              Av og til kan det bare være godt å ha noen å prate med. Du får
              ikke fravær for å ha vært hos skolehelsetjenesten, men husk å ta
              med lapp som bekrefter besøket med dato og klokkeslett.
            </AppText>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/skolehelsetjenesten/"
                );
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: "100%",
                  height: 60,
                  marginBottom: 10,
                  resizeMode: "contain"
                }}
                source={require("../assets/chat.png")}
              />
            </TouchableOpacity>
            <AppText>
              Du kan også bruke Chat-tjenesten (Trykk på ikonet og følg linken.
              Dertter klikk nede i høyre hjørne av nettsiden). Den driftes av
              Kristiansand kommune. Når du bruker tjenesten blir du satt over
              til skolehelsetjenesten i kommunen. Åpningstider chatten er mandag
              til torsdag (hverdager) kl. 13-15.
            </AppText>
            <TouchableOpacity
              style={styles.Links}
              onPress={() => {
                Linking.openURL(
                  "https://www.kristiansand.kommune.no/navigasjon/helse-velferd-og-omsorg/ungdom/helsestasjon-for-ungdom/"
                );
              }}
            >
              <AppText style={{ color: "blue" }}>
                Helsestasjon for ungdom - Kristiansand kommune
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Links}
              onPress={() => {
                Linking.openURL(
                  "https://www.facebook.com/helsestasjonforungdomkristiansand/?fref=mentions"
                );
              }}
            >
              <AppText style={{ color: "blue" }}>
                Helsestasjon for ungdom - Facebook
              </AppText>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />
          <AppText style={styles.header}>Rådgivere</AppText>
          <AppText>
            Hos kvadraturen videregående skole har vi mange dyktige rådgivere,
            som også samarbeider med fylkeskommunens Pedagogisk-psykologiske
            tjeneste (PPT) og Oppfølgingstjeneste (OT). De er alle ivrige etter
            å hjelpe deg med spørsmål om alt fra skole, videre utdanning og
            karriereveiledning til sosiale og personlige saker. Rådgiverne har
            taushetsplikt når det gjelder opplysninger som er privat og
            personlig. Som elev har du også gode muligheter til å få
            spesialundervisning eller samtale med minoritetsrådgiver, skulle det
            være behov for det. Ønsker du å snakke med noen om disse emnene, så
            kan du følge linkene for å få oversikt over rådgiverne på skolen.
          </AppText>
          <TouchableOpacity
            style={styles.Links}
            onPress={() => {
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/radgivere/"
              );
            }}
          >
            <AppText style={{ color: "blue" }}>Rådgivere (+ PPT og OT)</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Links}
            onPress={() => {
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/spesialundervisning/"
              );
            }}
          >
            <AppText style={{ color: "blue" }}>Spesialundervisning</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Links}
            onPress={() => {
              Linking.openURL(
                "https://kvadraturen.vgs.no/for-elever/hjelp-og-radgivning/minoritetsradgiver/"
              );
            }}
          >
            <AppText style={{ color: "blue" }}>Minoritetsrådgiver</AppText>
          </TouchableOpacity>
          <AppText>
            Mobbeombudet har taushetsplikt og er en uavhengig ressursperson for
            deg. Saker vil ikke bli tatt opp videre uten at du er enig. Les mer
            på fylkeskommunens hjemmeside
          </AppText>
          <TouchableOpacity
            style={styles.Links}
            onPress={() => {
              Linking.openURL(
                "https://agderfk.no/vare-tjenester/skole-og-opplaring/oppvekstombudet-i-agder/"
              );
            }}
          >
            <AppText style={{ color: "blue" }}>Mobbeombud</AppText>
          </TouchableOpacity>
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
  text: {
    fontSize: 20,
    marginBottom: 15
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 50,
    marginBottom: 10,
    resizeMode: "contain"
  },
  header: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 5
  },
  Points: {
    marginBottom: 10
  },
  Links: {
    marginVertical: 10
  }
});

export default HelseScreen;
