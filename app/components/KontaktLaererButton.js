import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class KontaktLaererButton extends Component {
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
            title="Kontaktlærer"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                Kontaktlærer har ansvaret for:
              </AppText>

              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å holde oppdaterte elevlister, og en tett dialog med kontoret
                  om antall/navn på elever
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gjennomføre en kartlegging i starten av året med formål
                  læringsstøttene tiltak
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gjennomføre en obligatorisk og forpliktende faglig samtale
                  med eleven minst en gang hvert halvår med utgangspunkt i
                  læringsmål fra de ulike kompetansemålene i faget.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bidra til et godt sosialt miljø i sin elevgruppe
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å veilede elevene sine mot mest mulig tilpassede og
                  realistiske arbeidsmål.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å følge opp den enkelte elevs faglige og sosiale utvikling
                  gjennom jevnlige elevsamtaler.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å utarbeide IOP/rapport for elever med spesialundervisning i
                  samarbeid med ressursteamet og faglærer.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å følge opp den enkelte elevs faglige og sosiale utvikling
                  gjennom jevnlige elevsamtaler.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gjennomføre trippelsamtale i henhold til årsplan og holde
                  kontakt/samtaler med foreldre/foresatte.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gi generell informasjon til elevene, bistå ved søknad om
                  tilrettelegging ved eksamen.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gi aktuell og relevant informasjon om sine kontaktelever til
                  andre lærere på trinnet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å kalle inn og samarbeide med rådgiver, avdelingsleder,
                  ressursteam, eller andre fagpersoner dersom nødvendig.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Fraværsregistreringer av elevene, sende varselbrev i samarbeid
                  med faglærer.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gi aktuell og relevant informasjon om sine kontaktelever til
                  andre lærere på trinnet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å håndtere disiplinærsaker i elevgruppen i samarbeid med
                  avdelingsleder og rektor.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gi elevene informasjon om deres rettigheter og plikter ved
                  skolen (skolereglementet og retningslinjer for vurdering).
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  At det oppnevnes elever for verv i skolesammenheng og
                  orienterer dem om deres plikter.
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
