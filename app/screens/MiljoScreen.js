import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

import * as Linking from "expo-linking";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Footer from "../components/Footer";

function MiljoScreen(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image
          style={styles.cover}
          source={require("../assets/miljoteam.jpg")}
        />
        <View style={styles.container}>
          <AppText style={styles.text}>
            Vi i miljøteamet jobber for å skape en inkluderende hverdag for
            elevene, der dere føler dere sett og hørt. Ikke nøl med å ta kontakt
            med en av oss, hvis du trenger noen å snakke med eller bare vil slå
            av en prat om skolehverdagen eller livet generelt. Vi er her for
            dere! Vi syns også det er gøy med nye ideer til skolens sosiale
            medier, så om du vet om noe kult vi kan poste eller informere om –
            hyl ut. Kom gjerne innom oss på kontoret som ligger inne på
            studieverkstedet eller huk tak i oss!
          </AppText>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  cover: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  text: {
    fontSize: 20,
    marginBottom: 15
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 80,
    marginBottom: 10,
    resizeMode: "contain"
  }
});

export default MiljoScreen;
