import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import Footer from "../components/Footer";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ImageButton from "../components/ImageButton";
import VirituellButton from "../components/VirituellButton";

function StudentWelcomeScreen({ onPress, navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
      <View style={styles.container}>
        <AppText style={styles.welcome}>Velkommen til Kvadraturen VGS</AppText>
        <Image style={styles.Line} source={require("../assets/LineThin.png")} />

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
                source={require("../assets/miljoteam.jpg")}
              />

              <AppText style={styles.title}>
                Trenger du noen å snakke med?
              </AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                På skolen ønsker vi å ta vare på elevene, så vi har mange du kan
                kontakte hvis du trenger noen å snakke med.
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
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
          <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/calendar.png")}
              />

              <AppText style={styles.title}>
                Se viktige datoer frem til høstferien
              </AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                Det er mye som skjer den første tiden på skolen, se oversikt her
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Facts")}>
            <View style={styles.card}>
              <Image
                style={styles.Cardimage}
                source={require("../assets/glass.png")}
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
  }
});

export default StudentWelcomeScreen;
