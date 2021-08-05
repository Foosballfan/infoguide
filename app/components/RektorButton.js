import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";

import AppText from "./AppText";

export default class RektorButton extends Component {
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
                source={require("../assets/mortenRektor.jpg")}
              />
              <Image
                style={styles.AppTextTouch}
                source={require("../assets/touch.png")}
              />
              <AppText style={styles.AppText}>Morten Torkelsen</AppText>
              <AppText style={styles.AppTextPos}>Rektor</AppText>
              <Image
                style={styles.image}
                source={require("../assets/cecilieGitmart.jpg")}
              />
              <AppText style={styles.AppTextRight}>Cecilie Gitmark</AppText>
              <AppText style={styles.AppTextPosRight}>
                Assisterende rektor
              </AppText>
            </View>
          </TouchableOpacity>

          {this.state.content ? (
            <>
              <AppText style={styles.desc}>
                Tlf. 908 35 647 {"\n"}E-post:{"\n"}Morten.Torkelsen@{"\n"}
                kvadraturen.vgs.no 
              </AppText>
              <AppText style={styles.descRight}>
                Tlf. 926 24 004 {"\n"}E-post:{"\n"}Cecilie.Gitmark@{"\n"}
                kvadraturen.vgs.no
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
    bottom: 35,
    left: 0
  },
  AppTextPos: {
    position: "absolute",
    backgroundColor: colors.black,
    padding: 6,
    fontSize: 15,
    color: colors.white,
    bottom: 0,
    left: 0
  },
  AppTextPosRight: {
    position: "absolute",
    backgroundColor: colors.black,
    padding: 6,
    fontSize: 15,
    color: colors.white,
    bottom: 0,
    right: 0
  },
  AppTextTouch: {
    position: "absolute",
    width: 40,
    height: 40,
    bottom: 200,
    left: 10
  },
  desc: {
    position: "absolute",
    backgroundColor: colors.secondarySmooth,
    padding: 6,
    fontSize: 15,
    color: colors.white,
    bottom: 100,
    left: 0
  },

  AppTextRight: {
    position: "absolute",
    backgroundColor: colors.white,
    padding: 6,
    color: colors.black,
    padding: 6,
    fontSize: 17,
    bottom: 35,
    right: 0
  },
  descRight: {
    position: "absolute",
    backgroundColor: colors.secondarySmooth,
    padding: 6,
    fontSize: 15,
    color: colors.white,
    bottom: 100,
    right: 0
  }
});
