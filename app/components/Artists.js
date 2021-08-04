import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";

function Artists(props) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/sebastianZalo.jpg")}
        />
        <AppText style={styles.AppText}>SEBASTIAN ZALO </AppText>
        <AppText style={styles.copyRightAppText}>
          Sebastian Zalo, Slottsfjell 2018. Foto: Kim Erlandsen, NRK P3
        </AppText>
        <Image style={styles.image} source={require("../assets/iris.jpg")} />
        <AppText style={styles.AppTextRight}>IRIS</AppText>
        <AppText style={styles.copyRightAppTextRight}>
          Iris vant i går tittelen Årets Urørt. I dag slipper hun en ny,
          blodfersk låt. (Foto: Kim Erlandsen, NRK P3)
        </AppText>
      </View>

      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/kjartan.jpg")} />
        <AppText style={styles.AppText}>KJARTAN LAURITZEN </AppText>
        <AppText style={styles.copyRightAppText}>
          Kjartan Lauritzen på Kastellscenen, Slottsfjell 2017. Foto: Tom
          Øverlie, NRK P3
        </AppText>
        <Image style={styles.image} source={require("../assets/fest.jpg")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    margin: 0,
    padding: 0
  },
  AppText: {
    position: "absolute",
    backgroundColor: "#76D0DC",
    fontWeight: "bold",
    padding: 6,
    fontSize: 17,
    color: "#C00000",
    bottom: 15,
    left: 0
  },
  AppTextRight: {
    position: "absolute",
    backgroundColor: "#76D0DC",
    fontWeight: "bold",
    padding: 6,
    fontSize: 17,
    color: "#C00000",
    bottom: 15,
    right: 0
  },
  copyRightAppText: {
    position: "absolute",
    color: "gray",
    fontSize: 5.2,
    bottom: 0,
    left: 0
  },
  copyRightAppTextRight: {
    position: "absolute",
    color: "gray",
    fontSize: 4,
    bottom: 0,
    right: 0
  },
  image: {
    width: "50%",
    height: 200
  }
});

export default Artists;
