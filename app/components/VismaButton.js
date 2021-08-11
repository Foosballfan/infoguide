import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class Servicetorget extends Component {
  constructor() {
    super();
    this.state = {
      content: false
    };
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <InfoButton
            color="primary"
            title="Visma InSchool"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/visma.png")}
              />
              <AppText style={styles.headlineDesc}>🎓 Visma InSchool</AppText>
              <AppText style={styles.text}>
                Informasjonsvideoer om lærernes oppgaver:
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=Y6ly9zhkPD8&t=32s"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Oversikt og navigering i VISMA
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=QTlnxeyA5LA"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Lærers oversikt over elever
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=QSULSwg-s_Q"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Lærers og kontaktlærers oversikt over elevens fravær
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=h5F7i-4CuVk"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av oppmøte i undervisningsøkter
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/a1U8bI4Md8c");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av oppmøte ved aktiviteter
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=bPrH02ST28k"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av oppmøte via app på telefon
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/5YHPWnUuC5Q");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Elevers melding om fravær
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.text}>
                Fraværskodene er tilpasset opplæringsloven og forskriftene. Les
                mer om dette på:
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.udir.no/regelverk-og-tilsyn/skole-og-opplaring/saksbehandling/fravar/fravar-i-videregaende/"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Utdanningsdirektoratets sider
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.Points}>Fraværs oppføring:</AppText>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  X: Udokumentert fravær. Den teller på fagfravær (altså
                  10%-grensen), time- og dagsfravær og kommer på vitnemålet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  M: Udokumentert fravær, melding gitt. Fraværet er meldt av
                  elev, men det teller ikke som dokumentert fravær. Teller som
                  X, på fagfravær, time- og dagsfravær, men kan komme eleven til
                  gunst hvis tvil om orden- og atferdskarakter. Meldes av eleven
                  selv eller foresatte.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  D: Dokumentert fravær. Dokumenteres fortrinnsvis av sakkyndig,
                  lege, tannlege, psykolog eller om det er dokumentasjon fra
                  andre velferdsgrunner eller politisk arbeid. Teller på dag- og
                  timefravær, samt på vitnemål, men ikke på fagfraværet.{" "}
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  !: Eleven har opplæring i andre fag. Brukes når eleven ikke
                  har fått undervisning i et fag pga. annen aktivitet i skolens
                  regi. Benyttes når skolen har planlagt en annen opplæring for
                  eleven i denne økta. Økta skal gjennomføres på et annet
                  tidspunkt. Skal ikke telle på fagfravær eller føres på
                  vitnemålet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  R: Rettighetsfravær. Er rettighetsfravær, slik som møte i
                  elevrådet eller annen skoleadministrativt arbeid. Benyttes ved
                  elevrådsarbeid, samtale med rådgiver/helsesøster/ledelse eller
                  avtalt studiearbeid. Skal ikke telle på fagfravær eller settes
                  på vitnemålet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  §: Trukket fra på vitnemål etter søknad. Med paragraf menes
                  det at fraværet ikke skal telle på vitnemålet, etter
                  innvilgelse av søknad for dette. Når § settes på et
                  dagsfravær, medfører det at koden også gjelder for timene
                  denne dagen.{" "}
                </AppText>
              </Unorderedlist>

              <AppText style={styles.text}>
                Merk! §-fraværskoden gis kun i sammenheng med elevsøknader om
                fratrekk av fravær. Når dette innvilges og godkjennes av
                skoleleder, vil elev automatisk få en § for de dokumenterte
                dagsfraværene det var søkt fratrekk om.
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/4_gLr93ULI4");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av anmerkninger
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/-RrcGs4puog");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Opprette underveisvurdering
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/eR4ChLUO8Mw");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av halvårs- og standpunktkarakterer
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/eR4ChLUO8Mw");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av halvårs- og standpunktkarakterer
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.text}>
                I løpet av et skoleår har elevene et krav om å få få
                halvårsvurderinger uten karakter i tillegg til de vanlige
                underveis-, halvårs- eller sluttvurderinger som gis. Dette kan
                gjøres ved å ha fagsamtaler med faglærere og elevsamtaler med
                kontaktlærer. I følge Forskrift til opplæringsloven §3.12 skal
                elevene gjennom hele skoleløpet ha halvårsvurdering uten
                karakter som skal gi veiledning om hvordan eleven kan øke
                kompetansen sin i faget. Det å dokumentere fagsamtalen gir en
                dokumentasjon på at halvårsvurdering uten karakter i faget er
                gjennomført. Det er også krav om halvårsvurdering i orden og
                atferd uten karakter i Forskrift til opplæringsloven §3.13.
                Dette skal også gjennomføres i hele skoleløpet. Det å
                dokumentere elevsamtalen gir en dokumentasjon på at
                halvårsvurdering i orden og atferd uten karakter er gjennomført.
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/MjxDJ1T-rnQ");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Halvårsvurdering uten karakter i fag
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/rqwJjsWd8tU");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Halvårsvurdering uten karakter i orden og adferd
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/qy2UgWcWsOc");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Opprette og sende varsler
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/SzipAEtjHPQ");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kommunikasjon – meldinger
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/dVPScSz-CxI");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kommunikasjon – SMS
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/CAHJxOz-nqc");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kommunikasjon – bruk av maler
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/V53stQx9GUs");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Opprette maler
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/dVPScSz-CxI");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Bytte rom og rombytting
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.headlineDesc}>Kontaktlærer</AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/Nvapa0-bToI");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kontaktlærer - registrere dagsfravær
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=LbE41nXpPVw"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kontaktlærer - oversikt fravær
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/QN2NbYK8m3o");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kontaktlærer - Endre fraværskoden på en enkelttime
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/a9inyIkWP2c");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kontaktlærer – oversikt over elevens anmerkninger
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/S4o1Xot-jpw");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Kontaktlærer – registrerer karakter i orden og adferd
                </AppText>
              </TouchableOpacity>

              <AppText style={styles.headlineDesc}>Ansatt</AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/pnW8VG8SeJQ");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Ansattfravær ved sykdom
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/NP9OO77k8-Y");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Ansatte permisjonssøknad
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/ERyjypepg4w");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Ansatte registrering av fravær
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/MAODCiPSMk8");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Ansattes oversikt over eget fravær
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.headlineDesc}>Easy Correct</AppText>
              <AppText style={styles.text}>
                Følg instruksjonene i videoen under for å logge inn på Easy
                Correct/Edword Addin. Du finner Edword addin ved å åpne Word.
                Programmet ligger til høyre under fanen "hjem". Klikk på
                prgrammet og deretter på "tannhjulet nederst. Følg
                instruksjonene i videoen. under "skolens navn" skriver du
                "Kvadraturen Skolesenter. Under "kode/passord": "Feedback
                N1412". Velg de kommentarsettene som er mest aktuelle for deg.
                Trenger du hjelp? Ta kontakt med Kjartan Karlsen via Teams. Jeg
                sitter på rom B402.
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://easycorrecthelp.zendesk.com/hc/en-us/articles/360023099112-How-To-Create-an-Account"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Easy Correct - Edword Addin
                </AppText>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start"
  },
  headerText: {
    fontSize: 20,
    margin: 10
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 30,
    marginTop: 10
  },
  headlineDesc: {
    fontSize: 23,
    fontWeight: "500",
    marginBottom: 10
  },
  Points: {
    marginBottom: 10,
    fontWeight: "500"
  }
});
