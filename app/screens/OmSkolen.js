import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { WebView } from "react-native-webview";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Footer from "../components/Footer";
import Servicetorget from "../components/Servicetorget";
import Studieverksted from "../components/Studieverksted";
import YouTubeExample from "../components/WebView";

function OmSkolen({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <View style={styles.container}>
          <Text style={styles.headline}>Klikk å les om skolen</Text>
          <Servicetorget />
          <Studieverksted />
          <Text style={styles.text}>Sjekk ut skolens utdanningstilbud </Text>
          <AppButton
            color="secondary"
            title="Utdannings Tilbud"
            onPress={() => navigation.navigate("")}
          />

          <Image
            style={styles.image}
            source={require("../assets/skolekart.png")}
          />
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    fontSize: 25
  },
  text: {
    marginTop: 20,
    fontSize: 20
  },
  image: {
    width: "100%",
    height: 250,
    margin: 10,
    borderRadius: 10
  }
});

export default OmSkolen;
