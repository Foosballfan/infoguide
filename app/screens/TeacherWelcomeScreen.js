import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import * as Linking from "expo-linking";
import FooterTeacher from "../components/FooterTeacher";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ImageButton from "../components/ImageButton";
import VirituellButton from "../components/VirituellButton";

function TeacherwelcomeScreen({ onPress, navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.primaryLight }}>
      <View style={styles.container}>
        <Image
          style={styles.Line}
          source={require("../assets/Kvadraturen-vgs.png")}
        />
        <AppText style={styles.welcome}>Velkommen</AppText>
        <AppText style={[styles.welcome, styles.italic]}>ansatt</AppText>

        <Image
          style={styles.Line}
          source={require("../assets/LineGreen.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.youtube.com/watch?v=5O0sg1S7UYY")
        }
      >
        <Image
          style={styles.imageMap}
          source={require("../assets/guttaYT.jpg")}
        />
        <AppText style={styles.infoText}>
          🎬 To av våre elever, Thomas og Sebastian, ønsker dere hjertelig
          velkommen til et nytt skoleår!
        </AppText>
      </TouchableOpacity>
      <View style={styles.container}>
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

              <AppText style={styles.title}>Årshjul</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                Det er mye som skjer den første tiden på skolen, se oversikten
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
          <TouchableOpacity
            onPress={() => navigation.navigate("SosialeAktiviteter")}
          >
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
            onPress={() => navigation.navigate("MiljoScreenTeacher")}
          >
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
          <TouchableOpacity onPress={() => navigation.navigate("HelseTeacher")}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/Helsesykepleiere.jpg")}
              />

              <AppText style={styles.title}>Elevoppfølging</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                På skolen ønsker vi å ta vare på elevene, så vi har mange
                elevene kan kontakte hvis de trenger noen å snakke med.
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
    fontSize: 22,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
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
  italic: { fontStyle: "italic", color: colors.primary },
  underline: { fontSize: 28 },
  imageMap: {
    width: "100%",
    height: 250,
    resizeMode: "contain"
  },
  infoText: {
    marginBottom: 0,
    marginHorizontal: 10
  }
});

export default TeacherwelcomeScreen;
