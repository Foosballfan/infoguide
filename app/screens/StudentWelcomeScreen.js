import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import * as Linking from "expo-linking";
import Footer from "../components/Footer";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ImageButton from "../components/ImageButton";
import VirituellButton from "../components/VirituellButton";

function StudentWelcomeScreen({ onPress, navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
      <View style={styles.container}>
        <Image
          style={styles.Line}
          source={require("../assets/Kvadraturen-vgs.png")}
        />
        <AppText style={styles.welcome}>Velkommen</AppText>
        <AppText style={[styles.welcome, styles.italic]}>elev</AppText>

        <Image style={styles.Line} source={require("../assets/LineThin.png")} />
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
            onPress={() => navigation.navigate("StudentTimeline")}
          >
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/firstweek.jpg")}
              />

              <AppText style={styles.title}>
                Se hva som skjer den første uken
              </AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                Det er mye som skjer første uken på skolen, se oversikt over din
                klasse her
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MiljoScreen")}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/miljo-team.jpg")}
              />

              <AppText style={styles.title}>Miljøteamet</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                På skolen ønsker vi å ta vare på elevene, så vi har mange du kan
                kontakte hvis du trenger noen å snakke med.
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("HelseScreen")}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/Helsesykepleiere.jpg")}
              />

              <AppText style={styles.title}>
                Trenger du noen å snakke med ?
              </AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                På skolen ønsker vi å ta vare på elevene, så vi har mange du kan
                kontakte hvis du trenger noen å snakke med.
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AktiviteterLunsj")}
          >
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/games.jpg")}
              />

              <AppText style={styles.title}>Aktiviteter i lunsjen</AppText>
              <AppText numberOfLines={4} style={styles.subTitle}>
                Det vil være morsomme aktviteter i lunsjen fremvoer, se oversikt
                over hva som skjer
              </AppText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Facts")}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/kvadda.png")}
              />

              <AppText style={styles.title}>Fakta</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                Bestill Kvadraturen vgs sin skolegenser. - Se om du har rett til
                skoleskyss.
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    justifyContent: "flex-start",
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
    margin: 0,
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
  italic: { fontStyle: "italic", color: colors.secondary },
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

export default StudentWelcomeScreen;
