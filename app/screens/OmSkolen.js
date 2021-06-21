import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Footer from "../components/Footer";
import HenteBokScreen from "../screens/HenteBokScreen";

function OmSkolen({ navigation }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <View style={styles.container}>
          <Text style={styles.headline}>Om skolen</Text>
          <Text style={styles.text}>Sjekk ut skolens utdanningstilbud </Text>
          <AppButton
            color="secondary"
            title="Utdannings Tilbud"
            onPress={() => navigation.navigate("TeacherWelcomeScreen")}
          />
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
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
