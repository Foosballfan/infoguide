import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class FagLaererButton extends Component {
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
            title="Faglærer"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                Fagtlærer har ansvaret for:
              </AppText>

              <Unorderedlist>
                <AppText style={styles.Points}>
                  Rapportere til kontaktlærer /avdelingsleder om elevens faglige
                  og sosiale utvikling.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Det faglige innholdet og opplæringen for alle elevene i sin
                  gruppe.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å formulere læringsmål sammen med elevene, formidle aktuelt
                  lærestoff, formulere problemstillinger og anbefale
                  arbeidsoppgaver.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å tilpasse opplæringen og arbeidsoppgavene til den enkelte
                  elevs faglige interesser, evner og forutsetninger.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gi elevene innflytelse i planlegging, gjennomføring og
                  vurdering av opplæringen.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å sette elevene i fokus ved å tilrettelegge for en
                  differensiert opplæring med vekt på:{"\n"}- Varierte
                  arbeidsmåter og arbeidsmetoder.{"\n"}- Utnytte pedagogisk bruk
                  av timeplanen (eks. periodelesing etc.){"\n"}- Legge til rette
                  for selvstendig læringsarbeid/læringsaktiviteter .{"\n"}-
                  Varierte arbeidsmåter og arbeidsmetoder.{"\n"}- Utarbeide
                  individuelle opplæringsplaner for enkelte elever i samarbeid
                  med kontaktlærer og ressursteamet.{"\n"}
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å ha dokumentasjon av elevens læring som gir grunnlag for
                  vurdering underveis og sluttvurdering i faget.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å påpeke og eventuelt gripe inn overfor atferd som bryter med
                  skolens felles holdninger og skolereglementet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å være daglig oppdatert på skolens kommunikasjonsplattformer.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Holde seg faglig oppdatert.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Kartlegging og vurdering.
                </AppText>
              </Unorderedlist>
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
    fontSize: 22,
    margin: 10,
    fontWeight: "500"
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20
  },
  Points: {
    fontSize: 20,
    marginBottom: 10
  }
});
