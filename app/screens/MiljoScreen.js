import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import * as Linking from "expo-linking";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Footer from "../components/Footer";
import GreteButton from "../components/GreteButton";

function MiljoScreen(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image
          style={styles.cover}
          source={require("../assets/miljo-team.jpg")}
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

          <View style={styles.row}>
            <Image
              style={styles.rowImage}
              source={require("../assets/marius.png")}
            />
            <View style={styles.rowText}>
              <AppText style={styles.name}>MARIUS</AppText>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowText}>
              <AppText style={styles.name}>THEA</AppText>
            </View>
            <Image
              style={styles.rowImage}
              source={require("../assets/Thea.png")}
            />
          </View>

          <View style={styles.row}>
            <Image
              style={styles.rowImage}
              source={require("../assets/ruben.png")}
            />
            <View style={styles.rowText}>
              <AppText style={styles.name}>RUBEN</AppText>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowText}>
              <AppText style={styles.name}>WENCHE</AppText>
            </View>
            <Image
              style={styles.rowImage}
              source={require("../assets/wenche.png")}
            />
          </View>

          <View style={styles.row}>
            <Image
              style={styles.rowImage}
              source={require("../assets/jaliet.png")}
            />
            <View style={styles.rowText}>
              <AppText style={styles.name}>JALIET</AppText>
            </View>
          </View>
          <Image
            style={styles.Line}
            source={require("../assets/LineThin.png")}
          />
          <AppText style={styles.text}>
            🎬 Sjekk ut noen av YouTube filmene vi har laget
          </AppText>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.youtube.com/watch?v=BgPKC-mXytQ");
            }}
          >
            <Image
              style={{ width: "100%", height: 250, resizeMode: "contain" }}
              source={require("../assets/delerutmat.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.youtube.com/watch?v=C97A9JVy3d4&t=13s"
              );
            }}
          >
            <Image
              style={{ width: "100%", height: 250, resizeMode: "contain" }}
              source={require("../assets/russen.jpg")}
            />
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "flex-start"
  },
  cover: {
    width: "100%",
    height: 250,
    resizeMode: "cover"
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 10
  },
  Line: {
    flex: 1,
    width: "100%",
    height: 50,
    marginBottom: 10,
    resizeMode: "contain"
  },
  header: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 10
  },

  row: {
    flexDirection: "row"
  },
  rowImage: {
    width: "50%",
    height: 200,
    resizeMode: "contain"
  },
  rowText: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  name: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 2,
    color: colors.secondary,
    fontStyle: "italic"
  }
});

export default MiljoScreen;
