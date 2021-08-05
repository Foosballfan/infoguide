import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

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
            color="secondary"
            title="Servicetorget"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/servicetorget.png")}
              />
              <AppText style={styles.headerText}>
                Servicetorget er skolens knutepunkt. Her finner du ekspedisjon
                og sentralbord med kontormedarbeidere som ivaretar mange
                funksjoner, som for eksempel:{"\n"}● skoleskyss{"\n"}● elevbevis{" "}
                {"\n"}● lån/stipend {"\n"}● vitnemål/kompetansebevis {"\n"}...
                og mye mer! Her kan du alltid henvise deg om du lurer på noe.
              </AppText>
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
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20
  }
});
