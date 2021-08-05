import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

export default class Kantine extends Component {
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
            title="Kantine"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/kantine.jpg")}
              />
              <AppText style={styles.headerText}>
                Hos oss finner du et utvalg av baguetter, rundstykker, ciabatta,
                salater, frukt, kaffe, te og diverse meieriprodukter. Vi
                tilbyr også en varmrett daglig, som lasagne, taco, pasta eller
                lignende.{"\n"}
                {"\n"}Skolekantinas åpningstid:{"\n"}mandag - fredag kl. 07.30 –
                13.30.{"\n"}Stengt i skolens ferier
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
    resizeMode: "cover",
    borderRadius: 20
  }
});
