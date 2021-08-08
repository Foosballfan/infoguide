import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class FagarbeidereButton extends Component {
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
            title="Fagarbeidere"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                Fagarbeidere har ansvaret for:
              </AppText>

              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å bidra til at det etableres et godt sosialt miljø rundt våre
                  elever og elevgrupper.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å være en tydelig og forutsigbar voksenperson/rollemodell for
                  alle elever på skolen.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å holde seg daglig oppdatert på skolens felles infosystem.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å melde fra om akutt fravær til avdelingsleder og siden fylle
                  ut og levere skjema for egenmelding eller sykemelding.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å skrive søknader om permisjon til avdelingsleder når det
                  gjelder deltakelse på kurs, velferd, eller lignende.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å delta i tilrettelegging og oppfølging av arbeidsoppgaver for
                  elever som følger opplæring i ordinære grupper og i mindre
                  grupper.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å samarbeide med kontaktlærer, faglærer og foresatte.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å delta på felles samarbeidstid, planleggingsdager,
                  foreldremøter og ansvarsgruppemøter etter avtale. I tillegg
                  delta på kurs- og kompetanseheving etter avtale med leder.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å delta på faste veiledningsmøter med ressursteam.
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
