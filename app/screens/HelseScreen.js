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
import MiljoScreenTeacher from "./MiljoTeamTeacher";

function HelseScreen(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image
          style={styles.cover}
          source={require("../assets/Helsesykepleiere.jpg")}
        />
        <View style={styles.container}>
          <AppText style={styles.headline}>Skolehelsetjenesten</AppText>
          <AppText style={styles.text}>
            Vi i skolehelsetjenesten kan blant annet hjelpe deg med:
          </AppText>
          <Image
            style={styles.coverWord}
            source={require("../assets/wordcloud1.png")}
          />
          <AppText style={styles.text}>
            Du kan komme til oss med alt, vi er her for dere HVER DAG. Kom innom
            kontoret, rom nr. B109 A og B109 B. Eller send sms!
          </AppText>
          <AppText style={styles.text}>
            Du er velkommen til å ta kontakt for timebestilling på SMS eventuelt
            Drop-in. Vi følger retningslinjene for godt smittevern.
          </AppText>
        </View>

        <GreteButton />
        <View style={styles.container}>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />

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
          <View style={styles.container}>
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
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.dropbox.com/s/fq5s7h5sumoxvt8/Video%2003.08.2020%2C%2010%2048%2036.mov?dl=0"
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require("../assets/helsesista.jpg")}
            />
          </TouchableOpacity>
          <AppText>
            Se Helsesista sine gode råd for et fint og motiverende skoleår her!
          </AppText>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />
          <AppText style={styles.headline}>Rådgivere</AppText>
        </View>
        <Image
          style={styles.coverRadgivere}
          source={require("../assets/radgivere.jpg")}
        />
        <View style={styles.container}>
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
  headline: {
    fontSize: 25,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10
  },

  cover: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  coverRadgivere: {
    width: "100%",
    height: 300,
    resizeMode: "contain"
  },
  coverWord: {
    width: "100%",
    height: 200,
    resizeMode: "contain"
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
