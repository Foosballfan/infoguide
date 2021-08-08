import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class MentorButton extends Component {
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
            title="Mentor"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                Mentor har ansvaret for:
              </AppText>

              <Unorderedlist>
                <AppText style={styles.Points}>
                  Individuell veiledning til nyansatte lærere ved skolesenteret
                  det første året.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Påse at nyansatte inkluderes i skolens læringskultur på tvers
                  av fagfelt og avdelinger.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Tilby støtte og hjelp for læringsarbeid i klasserommet, med
                  observasjon, samtaler, og refleksjon rundt lærerens
                  undervisningspraksis.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å være en samtalepartner, veileder og motivator i en ny og
                  hektisk hverdag.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Invitere nye kolleger inn i sine læringsøkter for å dele sine
                  metoder og skape rom for fremtidig delingskultur og samarbeid
                  rundt praksisfeltet.
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
