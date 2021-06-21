import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

import AppText from "../components/AppText";

function HenteBokScreen(props) {
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/books-computer.jpg")}
        />
      </View>
      <View style={styles.container}>
        <AppText style={styles.headline}>Henting av Bøker og PC </AppText>
        <AppText style={styles.subTitle}>
          Nytt Skoleår. Her på Kvadraturen får alle elever låne bøker og PC
          gratis. Det vil bli utlånt en HP 300.{" "}
        </AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  container: {
    margin: 15
  },
  headline: {
    fontSize: 25,
    fontWeight: "500"
  },
  subTitle: {
    marginTop: 20
  }
});

export default HenteBokScreen;
