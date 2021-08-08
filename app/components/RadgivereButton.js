import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class RagivereButton extends Component {
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
            title="Rådgivere & ressursteamet"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                Rådgivere og ressursteamet har ansvaret for:
              </AppText>

              <Unorderedlist>
                <AppText style={styles.Points}>
                  De sosialpedagogiske oppgavene ved skolesenteret.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å delta i ukentlige møter i ressursteamet og med lærere og
                  ledelse.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å samarbeide med skolens personale og foreldre/foresatte for å
                  avdekke årsaker til stort fravær hos enkeltelever og sette i
                  verk tiltak som kan motvirke at elever uteblir fra
                  opplæringen.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å være skolens hovedkontakter for PPT og foreta oppmeldinger
                  til PPT.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å delta på ansvarsgruppemøter.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gjennomføre aktuelle kartleggingssystemer for alle elever,
                  systematisere oppfølging av kartleggingen.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bistå avdelingsleder med utforming av enkeltvedtak for
                  elever med spesialundervisning og særskilt norsk opplæring.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å foreslå tiltak og bistå kontaktlærer med utarbeiding av
                  individuelle opplæringsplaner (IOP) for elever med behov for
                  spesialundervisning.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å lage forslag til fordeling av spesialpedagoger, hjelpe med
                  periodisering og organisering av spesialundervisning.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bistå elever under innsøking til videregående skole/
                  høyskole - Universitet.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å lage forslag til fordeling av spesialpedagoger, hjelpe med
                  periodisering og organisering av spesialundervisning.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å se til at individuelle opplæringsplaner (IOP) blir fulgt opp
                  og at det gjennomføres vurderinger underveis.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bistå kontaktlærer i å utarbeide årsrapport på grunnlag av
                  spesialundervisning.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å tilrettelegge for fremmedspråklige elever gjennom:
                  orientering om rettigheter, kartlegging, norsk som 2.språk og
                  andre aktuell tilpasninger.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å kartlegge og foreslå tiltak for elever med
                  tilretteleggingsbehov v/eksamen – se egen rutine og eget
                  skjema.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bistå faglærere med spesialpedagogiske råd ved utarbeidelse
                  og gjennomføring av tilpasset opplæring.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å gi elevene individuell og/eller gruppevis karriereveiledning
                  og råd i forbindelse med valg av utdannings- og yrkesvalg.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bygge nettverk mellom skolen og arbeidsliv, å koordinere
                  tiltak som skaper gode overganger for elevene til bedrifter.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å kvalitetssikre informasjon til elever og foreldre blant
                  annet ved å informere elever og foreldre om
                  utdanningssystemet, gi elevene opplæring i bruk av digitalt
                  informasjons- og veiledningsmateriell og gi veiledning ved
                  søknader til videregående opplæring.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Innsøking av elever med særskilte behov.
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
