import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";

import AppText from "./AppText";

export default class GreteButton extends Component {
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
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={this.componentHideAndShow}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/grete.jpg")}
              />
              <AppText style={styles.AppText}>Grete Seland Aasen</AppText>
              <Image
                style={styles.image}
                source={require("../assets/kari.jpg")}
              />
              <AppText style={styles.AppTextRight}>Kari Horrisland</AppText>
            </View>
          </TouchableOpacity>

          {this.state.content ? (
            <>
              <AppText style={styles.desc}>
                Helsesykepleier{"\n"}
                Tlf. 975 06 838 {"\n"}E-post:{"\n"}grete.seland.aasen@{"\n"}
                kristiansand.kommune.no 
              </AppText>
              <AppText style={styles.descRight}>
                Helsesykepleier{"\n"}
                Tlf. 415 14 997 {"\n"}E-post:{"\n"}kari.horrisland@{"\n"}
                kristiansand.kommune.no
              </AppText>
            </>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    flexDirection: "row"
  },
  image: {
    width: "50%",
    height: 250
  },
  AppText: {
    position: "absolute",
    backgroundColor: colors.white,
    padding: 6,
    fontSize: 17,
    color: colors.black,
    bottom: 15,
    left: 0
  },
  desc: {
    position: "absolute",
    backgroundColor: colors.secondarySmooth,
    padding: 6,
    fontSize: 15,
    color: colors.white,
    bottom: 50,
    left: 0
  },

  AppTextRight: {
    position: "absolute",
    backgroundColor: colors.white,
    padding: 6,
    color: colors.black,
    padding: 6,
    fontSize: 17,
    bottom: 15,
    right: 0
  },
  descRight: {
    position: "absolute",
    backgroundColor: colors.secondarySmooth,
    padding: 6,
    fontSize: 15,
    color: colors.white,
    bottom: 50,
    right: 0
  }
});
