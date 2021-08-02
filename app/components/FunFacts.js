import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import * as Linking from "expo-linking";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

export default class FunFacts extends Component {
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
            title="Fun Facts"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headerText}>
                👇 Trykk for å bestille Kvadraturens skolegensere allerede nå!
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://kvadraturen.vgs.no/aktuelt/skolegensere.33615.aspx"
                  );
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../assets/skolegenser.jpg")}
                />
              </TouchableOpacity>
              <Image
                style={styles.Line}
                source={require("../assets/LineThin.png")}
              />
              <AppText style={styles.headerText}>
                🚌 Du har rett til fri skoleskyss når avstand mellom hjem og
                skole er mer enn 6 km. Elevene skal selv søke om ordinær
                skoleskyss til videregående skole via FSkyss.
              </AppText>
              <TouchableOpacity
                style={styles.headerText}
                onPress={() =>
                  Linking.openURL(
                    "https://skoleskyss.akt.no/Account/Login?ReturnUrl=/"
                  )
                }
              >
                <AppText style={{ color: "blue" }}>Bestill her</AppText>
              </TouchableOpacity>
              <Image
                style={styles.Line}
                source={require("../assets/LineSpin.png")}
              />
              <AppText style={styles.headerText}>
                ✨ Elever med sykdom/funksjonshemming som har betydning for
                skolegangen må gjøre dette kjent for kontaktlærer eller
                rådgiver. Skolen vil da tilpasse opplæringen for deg. Har du
                fysisk funksjonshemming som gjør at du ikke kan gå i trapper,
                kan du få heiskort for å bruke heisene. Kontakt servicetorget!
              </AppText>
              <Image
                style={styles.Line}
                source={require("../assets/LineThin.png")}
              />
              <AppText style={styles.headerText}>
                🎓 Fra skoleåret 2021/2022 innfører Agder fylkeskommune et
                felles digitalt skolebevis for sine elever og studenter.
                Digitalt skolebevis er en del av Visma InSchool (VIS) appen, og
                pålogging til skolebeviset følger appen.
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
    fontSize: 18,
    margin: 10
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10
  },
  Line: {
    width: 300,
    height: 80,
    resizeMode: "contain"
  }
});
