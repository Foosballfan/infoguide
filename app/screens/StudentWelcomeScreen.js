import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text
} from "react-native";

import * as Linking from "expo-linking";

import ImageView from "../components/ImageView";
import Footer from "../components/Footer";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ImageButton from "../components/ImageButton";

function StudentWelcomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
      <View style={styles.container}>
        <AppText style={styles.welcome}>Velkommen til Kvadraturen VGS</AppText>

        <View style={styles.festival}>
          <ImageButton onPress={() => navigation.navigate("Festival")} />
        </View>

        <Image
          style={styles.image}
          source={require("../assets/virituelskole.png")}
        />
        <Button
          title="Virtuell digital åpen skole "
          style={styles.button}
          onPress={() => {
            Linking.openURL("http://193.213.19.37/kva/");
          }}
        />
        <AppText style={styles.festival}>
          👋 Bli kjent på skolen via vår virutuelle digitale skole.
        </AppText>
      </View>
      <ImageView />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontWeight: "800",
    margin: 5,
    marginTop: 20,
    fontSize: 22
  },
  description: {
    margin: 10,
    fontSize: 18
  },
  button: {
    fontSize: 10,
    backgroundColor: colors.secondary,
    height: 100,
    width: 100,
    color: colors.white
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: 200,
    marginBottom: 10,
    marginTop: 20
  },
  festival: {
    margin: 4,
    marginBottom: 20,
    fontWeight: "500"
  },
  logo: {
    width: "100%",
    height: 165,
    marginBottom: 10
  }
});

export default StudentWelcomeScreen;
