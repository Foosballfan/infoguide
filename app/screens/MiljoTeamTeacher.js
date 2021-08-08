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

import FooterTeacher from "../components/FooterTeacher";

function MiljoScreenTeacher(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.primaryLight }}>
        <Image
          style={styles.cover}
          source={require("../assets/miljo-team.jpg")}
        />
        <View style={styles.container}>
          <AppText style={styles.headline}>Miljøteamet ❤️</AppText>
          <AppText style={styles.text}>
            Elever kan også henvises til miljøteamet. Dette gjelder også for
            eventuell ekstra oppfølging av enkeltelever, hovedsakelig sosialt,
            men også faglig hvis det er behov. I tillegg har miljøteamet ansvar
            for sosiale medier, så vi oppfordrer til tett dialog med miljøteamet
            hvis det skulle dukke opp noe som er gøy å ha på skolens ulike
            plattformer. Det kan være alt fra spennende prosjekter som
            gjennomføres av elevene, noe spesielt som foregår i undervisningen
            eller en elev med en interessant hobby eller et unikt talent. Heller
            tips oss en gang for mye enn en gang for lite. Vi jobber for å skape
            en inkluderende hverdag for elevene, der de føler seg sett og hørt.
            Kom gjerne innom oss på kontoret som ligger inne på studieverkstedet
            eller huk tak i oss! For sosiale media henvendelser - kontakt:
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto:kim.marius.ask@kvadraturen.vgs.no")
              }
            >
              <AppText style={{ color: "blue" }}>
                kim.marius.ask@kvadraturen.vgs.no
              </AppText>
            </TouchableOpacity>
            Vi har også en miljøkoordinator, som jobber på tvers av Kvadraturen
            vgs, KKG vgs og Tangen vgs som kan kontaktes i sammenheng med
            utsatte enkeltelever:{" "}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto:ruben.kleiven@kvadraturen.vgs.no")
              }
            >
              <AppText style={{ color: "blue" }}>
                ruben.kleiven@kvadraturen.vgs.no
              </AppText>
            </TouchableOpacity>
          </AppText>
          <Image
            style={styles.Line}
            source={require("../assets/LineGreen.png")}
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
              <AppText style={styles.name}>JALIET</AppText>
            </View>
            <Image
              style={styles.rowImage}
              source={require("../assets/jaliet1.png")}
            />
          </View>

          <View style={styles.row}>
            <Image
              style={styles.rowImage}
              source={require("../assets/wenche.png")}
            />
            <View style={styles.rowText}>
              <AppText style={styles.name}>WENCHE</AppText>
            </View>
          </View>
          <Image
            style={styles.Line}
            source={require("../assets/LineGreen.png")}
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

        <FooterTeacher />
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
  headline: {
    marginHorizontal: 10,
    marginTop: 10,

    fontSize: 25,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  headline: {
    fontSize: 25,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1
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
    color: colors.primary,
    fontStyle: "italic"
  }
});

export default MiljoScreenTeacher;
