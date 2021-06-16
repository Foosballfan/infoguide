import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import * as Linking from "expo-linking";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Apptext from "../components/AppText";
import colors from "../config/colors";

function Footer(props) {
  return (
    <View style={styles.container}>
      <Apptext style={styles.text}>Følg oss</Apptext>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.facebook.com/kvadraturen.vgs/");
          }}
        >
          <MaterialCommunityIcons
            name="facebook"
            size={35}
            color="white"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.instagram.com/kvadraturenvgs/");
          }}
        >
          <MaterialCommunityIcons
            name="instagram"
            size={35}
            color="white"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.youtube.com/channel/UCGR9J1I9fQFnw3sGadfwbtw"
            );
          }}
        >
          <MaterialCommunityIcons
            name="youtube"
            size={35}
            color="white"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://kvadraturen.vgs.no");
          }}
        >
          <MaterialCommunityIcons
            name="home"
            size={35}
            color="white"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
      </View>

      <Apptext style={styles.undertext}> Utviklet av: Tiril Fjell</Apptext>
      <Apptext style={styles.undertext}>
        Utviklingsredaktør: Thea Gitmark Ugland
      </Apptext>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    letterSpacing: 3,
    textTransform: "uppercase",
    fontSize: 15
  },
  icons: {
    flexDirection: "row",
    marginBottom: 20
  },
  undertext: {
    color: colors.white,
    fontSize: 15
  }
});

export default Footer;
