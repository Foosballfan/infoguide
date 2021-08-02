import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

export default class Elevrad extends Component {
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
            color="secondary"
            title="Elevråd"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <AppText style={styles.headerText}>
              Vi oppfordrer elever til å engasjere seg i skolens elevråd! Som
              medlem arbeider du med andre engasjerte elever for å skape gode
              forhold og trivsel på skolen. Alle skolens elevgrupper velger en
              tillitselev med vara. Tillitseleven leder klasseråd i samarbeid
              med kontaktlærer. Tillitseleven er elevgruppas representant i
              avdelingselevråd og kan fremme alle de sakene klassen ønsker.
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
