import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import FooterTeacher from "../components/FooterTeacher";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ImageButton from "../components/ImageButton";
import VirituellButton from "../components/VirituellButton";

function TeacherwelcomeScreen({ onPress, navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.primaryLight }}>
      <View style={styles.container}>
        <AppText style={styles.welcome}>Velkommen til</AppText>
        <AppText style={[styles.welcome, styles.italic]}>Kvadraturen</AppText>
        <AppText style={[styles.welcome, styles.underline]}>
          Vidregående skole
        </AppText>
        <Image
          style={styles.Line}
          source={require("../assets/LineGreen.png")}
        />

        <View style={styles.festival}>
          <ImageButton onPress={() => navigation.navigate("Festival")} />
        </View>

        <VirituellButton />
      </View>
      <AppText style={styles.description2}>Siste nytt ⚡️</AppText>
      <ScrollView horizontal>
        <View style={styles.Cardcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TeachersTimeframe")}
          >
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/calendar.png")}
              />

              <AppText style={styles.title}>Tidshjul</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                Det er mye som skjer den første tiden på skolen, se oversikten
                her.
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/yoga.jpg")}
              />

              <AppText style={styles.title}>Sosiale aktiviteter</AppText>
              <AppText numberOfLines={4} style={styles.subTitle}>
                Det vil skje morsomme sosiale aktiviterer fremover. Se oversikt
                her.
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TeachersOverView")}
          >
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/hvemhva.jpg")}
              />

              <AppText style={styles.title}>Hvem gjør hva ?</AppText>
              <AppText numberOfLines={4} style={styles.subTitle}>
                Oversikt over hvem som gjør hva, og din rolle som lærer.
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MiljoScreen")}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/miljoteam.jpg")}
              />

              <AppText style={styles.title}>Miljøteamet</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                På skolen ønsker vi å ta vare på elevene, så vi har mange du kan
                kontakte hvis du trenger noen å snakke med.
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterTeacher />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontWeight: "800",
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700"
  },
  description: {
    margin: 10,
    fontSize: 18
  },
  description2: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
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
  },
  Line: {
    flex: 1,
    width: 200,
    height: 60,
    resizeMode: "contain"
  },
  Cardcontainer: {
    margin: 5,

    flexDirection: "row"
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 12,
    overflow: "hidden",
    width: 200,
    height: 280
  },
  Cardimage: {
    width: "100%",
    height: 140
  },
  detailsContainer: {
    padding: 10
  },
  title: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 18
  },
  subTitle: {
    color: "gray",
    fontSize: 16,
    marginHorizontal: 5
  },
  italic: { fontStyle: "italic", color: colors.primary }
});

export default TeacherwelcomeScreen;
