import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import colors from "../config/colors";

import Footer from "../components/Footer";
import AppText from "../components/AppText";

function LedelsenStudent(props) {
  return (
    <>
      <ScrollView style={{ backgroundColor: colors.secondaryLight }}>
        <Image
          style={styles.cover}
          source={require("../assets/ledelsen3.jpg")}
        />

        <View style={styles.row}>
          <Image
            style={styles.rowImage}
            source={require("../assets/morten.jpg")}
          />
          <View style={styles.rowText}>
            <AppText style={styles.name}>Morten Torkelsen</AppText>
            <AppText style={styles.pos}>Rektor</AppText>
            <AppText style={styles.tlf}>Tlf. 908 35 647</AppText>
            <AppText style={styles.email}>
              Morten.Torkelsen@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <AppText style={styles.name}>Cecilie Gitmark</AppText>
            <AppText style={styles.pos}>
              Assisterende rektor Avdelingsleder
            </AppText>
            <AppText style={styles.underPos}>
              - Elevtjenester{"\n"}- Ressursteamet
            </AppText>
            <AppText style={styles.tlf}>Tlf. 926 24 004</AppText>
            <AppText style={styles.email}>
              Cecilie.Gitmark@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
          <Image
            style={styles.rowImage}
            source={require("../assets/cecilieGitmark.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.rowImage}
            source={require("../assets/WencheFjell.jpg")}
          />
          <View style={styles.rowText}>
            <AppText style={styles.name}>Wenche Fjell Gundersen</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - P??bygg{"\n"}- Humanister
            </AppText>
            <AppText style={styles.tlf}>Tlf. 905 71 424</AppText>
            <AppText style={styles.email}>
              Wenche.Fjell.Gundersen@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <AppText style={styles.name}>Frode Aar??e</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - Studieforberedende{"\n"}med elektro Realfag
            </AppText>
            <AppText style={styles.tlf}>Tlf. 954 99 583</AppText>
            <AppText style={styles.email}>
              Frode.Aaroe@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
          <Image
            style={styles.rowImage}
            source={require("../assets/FrodeAaroe.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.rowImage}
            source={require("../assets/BeateFjellestad.jpg")}
          />
          <View style={styles.rowText}>
            <AppText style={styles.name}>Beate Fjellestad</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - Hverdagslivstrening{"\n"}- Helse og oppvekstfag{"\n"}- Vg1
            </AppText>
            <AppText style={styles.tlf}>Tlf. 992 36 192</AppText>
            <AppText style={styles.email}>
              Beate.Fjellestad@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <AppText style={styles.name}>Arild Knutsen</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - Teknologi- og industrifag
            </AppText>
            <AppText style={styles.tlf}>Tlf. 954 99 583</AppText>
            <AppText style={styles.email}>
              Arild.Knutsen@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
          <Image
            style={styles.rowImage}
            source={require("../assets/ArildKnutsen.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.rowImage}
            source={require("../assets/KarstenOen.jpg")}
          />
          <View style={styles.rowText}>
            <AppText style={styles.name}>Karsten ??en</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>- Elektrofag</AppText>
            <AppText style={styles.tlf}>Tlf. 908 68 138</AppText>
            <AppText style={styles.email}>
              Karsten.oen@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <AppText style={styles.name}>Linda Opsal</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - Studieforberedende{"\n"}med helse{"\n"}- Plan og
              elevadministrasjon
              {"\n"}- Eksamen
            </AppText>
            <AppText style={styles.tlf}>Tlf. 412 71 230</AppText>
            <AppText style={styles.email}>
              Linda.Opsal@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
          <Image
            style={styles.rowImage}
            source={require("../assets/LindaOpsal.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.rowImage}
            source={require("../assets/LeifKare.jpg")}
          />
          <View style={styles.rowText}>
            <AppText style={styles.name}>Leif K??re Spartveit</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - ??konomi{"\n"}- Personal{"\n"}- Administrasjon{"\n"}- Drift{"\n"}
              - HMS
            </AppText>
            <AppText style={styles.tlf}>Tlf. 478 87 230</AppText>
            <AppText style={styles.email}>
              Leif.Kare.Spartveit@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <AppText style={styles.name}>Tone Ullestad</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - Helse- og oppvekstfag{"\n"}- Vg2/Vg3
            </AppText>
            <AppText style={styles.tlf}>Tlf. 945 26 750</AppText>
            <AppText style={styles.email}>
              Tone.ullestad@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
          <Image
            style={styles.rowImage}
            source={require("../assets/ToneUllestad.jpg")}
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.rowImage}
            source={require("../assets/Frank-Bruheim.jpg")}
          />
          <View style={styles.rowText}>
            <AppText style={styles.name}>Frank Bruheim</AppText>
            <AppText style={styles.pos}>Avdelingsleder</AppText>
            <AppText style={styles.underPos}>
              - Idrett- og kropps??ving {"\n"}- Kurs virksomhet
            </AppText>
            <AppText style={styles.tlf}>Tlf. 905 49 286</AppText>
            <AppText style={styles.email}>
              Frank.Bruheim@{"\n"}kvadraturen.vgs.no
            </AppText>
          </View>
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
    height: 280,
    resizeMode: "cover"
  },
  headline: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 5
  },
  text: {
    marginBottom: 5,
    fontSize: 20
  },
  image: {
    width: "100%",
    height: 250,
    margin: 10,
    borderRadius: 10
  },
  row: {
    flexDirection: "row"
  },
  rowImage: {
    width: "50%",
    height: 250
  },
  rowText: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  email: {
    fontSize: 15,
    color: "blue"
  },
  pos: {
    fontSize: 17,
    marginBottom: 0
  },
  underPos: {
    fontSize: 15,
    marginBottom: 5
  },
  name: {
    fontSize: 21,
    fontWeight: "500",
    marginBottom: 2,
    color: colors.secondary
  },
  tlf: {
    fontWeight: "500",
    fontSize: 17,
    marginBottom: 5,
    marginTop: 5
  }
});

export default LedelsenStudent;
