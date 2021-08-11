import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class Servicetorget extends Component {
  constructor() {
    super();
    this.state = {
      content: false
    };
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <InfoButton
            color="primary"
            title="Visma InSchool"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/visma.png")}
              />
              <AppText style={styles.headlineDesc}>🎓 Visma InSchool</AppText>
              <AppText style={styles.text}>
                Informasjonsvideoer om lærernes oppgaver:
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=Y6ly9zhkPD8&t=32s"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Oversikt og navigering i VISMA
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=QTlnxeyA5LA"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Lærers oversikt over elever
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=QSULSwg-s_Q"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Lærers og kontaktlærers oversikt over elevens fravær
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=h5F7i-4CuVk"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av oppmøte i undervisningsøkter
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/a1U8bI4Md8c");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av oppmøte ved aktiviteter
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.youtube.com/watch?v=bPrH02ST28k"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Registrering av oppmøte via app på telefon
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://youtu.be/5YHPWnUuC5Q");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Elevers melding om fravær
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.text}>
                Fraværskodene er tilpasset opplæringsloven og forskriftene. Les
                mer om dette på Utdanningsdirektoratets sider:
              </AppText>
            </>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start"
  },
  headerText: {
    fontSize: 20,
    margin: 10
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 10
  },
  headlineDesc: {
    fontSize: 23,
    fontWeight: "500",
    marginBottom: 10
  }
});
