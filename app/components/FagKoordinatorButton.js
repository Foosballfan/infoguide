import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class FagKoordinatorButton extends Component {
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
            title="Fagkoordinator"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                Fagkoordinator har ansvaret for:
              </AppText>

              <Unorderedlist>
                <AppText style={styles.Points}>
                  Utarbeide terminplan for fagsamlinger i samarbeid med
                  avdelingsleder og faglærerne.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Innkalling til fagmøter etter oppsatt plan for skolen, samt
                  møteledelse og referat.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å holde seg faglig oppdatert og spre relevant informasjon til
                  kollegaer om faglig, didaktisk og metodisk utvikling, nye
                  læreplaner og utviklingsarbeid.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Være pådriver i skolens faglige utviklingsarbeid, bidra til
                  initiering og implementering av faglig, didaktisk og metodisk
                  arbeid i faggruppa.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Å delta på aktuelle møter med skolens ledelse og de andre
                  koordinatorene.
                </AppText>
              </Unorderedlist>
              <Unorderedlist>
                <AppText style={styles.Points}>
                  Ansvar for innkjøp og vedlikehold av aktuelt utstyr/materiell.
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
