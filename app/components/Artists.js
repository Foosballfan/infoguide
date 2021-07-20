import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function Artists(props) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/sebastianZalo.jpg")}
        />
        <Text style={styles.text}>SEBASTIAN ZALO </Text>
        <Text style={styles.copyRightText}>
          Sebastian Zalo, Slottsfjell 2018. Foto: Kim Erlandsen, NRK P3
        </Text>
        <Image style={styles.image} source={require("../assets/kjartan.jpg")} />
      </View>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/kjartan.jpg")} />
        <Text style={styles.text}>KJARTAN LAURITZEN </Text>
        <Text style={styles.copyRightText}>
          Kjartan Lauritzen på Kastellscenen, Slottsfjell 2017. Foto: Tom
          Øverlie, NRK P3
        </Text>
        <Image
          style={styles.image}
          source={require("../assets/sebastianZalo.jpg")}
        />
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
  text: {
    position: "absolute",
    backgroundColor: "#76D0DC",
    fontWeight: "bold",
    padding: 6,
    fontSize: 17,
    color: "#C00000",
    bottom: 15,
    left: 0
  },
  copyRightText: {
    position: "absolute",
    color: "gray",
    fontSize: 4.5,
    bottom: 0,
    left: 0
  },
  image: {
    width: "50%",
    height: 200
  }
});

export default Artists;
