import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, Button } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

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

  componentHideAndShowtwo = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <InfoButton
            color="secondary"
            title="Servicetorget"
            onPress={this.componentHideAndShow}
          />
          {// Display the content in screen when state object "content" is true.
          // Hide the content in screen when state object "content" is false.
          this.state.content ? (
            <AppText style={styles.headerText}>
              {" "}
              Servicetorget er skolens knutepunkt. Her finner du ekspedisjon og
              sentralbord med kontormedarbeidere som ivaretar mange funksjoner,
              som for eksempel: ● skoleskyss ● elevbevis ● lån/stipend ●
              vitnemål/kompetansebevis ... og mye mer! Her kan du alltid henvise
              deg om du lurer på noe. Åpningstid  Mandag- fredag kl. 07.30 -
              15.00  Telefon: 38 07 73 00 NB! Skolens inngangsdører er åpne
              mellom kl. 07.00 og 14.45, mandag til fredag.{" "}
            </AppText>
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
    fontSize: 18,
    margin: 10
  }
});
