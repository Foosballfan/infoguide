import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import * as Linking from "expo-linking";

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
            <>
              <Image
                style={styles.image}
                source={require("../assets/elevrad-2021.jpg")}
              />
              <AppText style={styles.headerText}>
                Vi oppfordrer elever til å engasjere seg i skolens elevråd!
                {"\n"}
                {"\n"}Som medlem arbeider du med andre engasjerte elever for å
                skape gode forhold og trivsel på skolen.{"\n"}Alle skolens
                elevgrupper velger en tillitselev med vara. Tillitseleven leder
                klasseråd i samarbeid med kontaktlærer. Tillitseleven er
                elevgruppas representant i avdelingselevråd og kan fremme alle
                de sakene klassen ønsker.
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://kvadraturen.vgs.no/aktuelt/elevradsleder-om-pandemien.31700.aspx"
                  );
                }}
              >
                <Image
                  style={{ width: 300, height: 300, resizeMode: "contain" }}
                  source={require("../assets/elevradSak.jpg")}
                />
                <AppText>Les saken : Elevrådsleder om pandemien</AppText>
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
    fontSize: 18,
    margin: 10
  },
  image: {
    width: 340,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20
  }
});
