import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import Unorderedlist from "react-native-unordered-list";

import AppText from "../components/AppText";
import Footer from "../components/Footer";
import colors from "../config/colors";

function HenteBokScreen(props) {
  return (
    <>
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
            gratis. Det vil bli utlånt en HP 300. Henting foregår på
            studeiverkstedet
          </AppText>

          <View style={styles.list}>
            <Unorderedlist
              bulletUnicode={0x2022}
              style={{ fontSize: 30 }}
              color={colors.secondary}
            >
              <Text style={{ fontSize: 25 }}>Vg 1</Text>
              <Unorderedlist
                bulletUnicode={0x25e6}
                color={colors.secondary}
                style={{ fontSize: 20 }}
              >
                <Text style={{ fontSize: 20 }}>1A - kl 12</Text>
              </Unorderedlist>
              <Unorderedlist
                bulletUnicode={0x25e6}
                color={colors.secondary}
                style={{ fontSize: 20 }}
              >
                <Text style={{ fontSize: 20 }}>1B - kl 13</Text>
              </Unorderedlist>
              <Unorderedlist
                bulletUnicode={0x25e6}
                color={colors.secondary}
                style={{ fontSize: 20 }}
              >
                <Text style={{ fontSize: 20 }}>1C - kl 15</Text>
              </Unorderedlist>
            </Unorderedlist>

            <View style={{ marginTop: 20 }}>
              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 30 }}
                color={colors.secondary}
              >
                <Text style={{ fontSize: 25 }}>Vg 2</Text>
                <Unorderedlist
                  bulletUnicode={0x25e6}
                  color={colors.secondary}
                  style={{ fontSize: 20 }}
                >
                  <Text style={{ fontSize: 20 }}>1A - kl 12</Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x25e6}
                  color={colors.secondary}
                  style={{ fontSize: 20 }}
                >
                  <Text style={{ fontSize: 20 }}>1B - kl 13</Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x25e6}
                  color={colors.secondary}
                  style={{ fontSize: 20 }}
                >
                  <Text style={{ fontSize: 20 }}>1C - kl 15</Text>
                </Unorderedlist>
              </Unorderedlist>
            </View>
            <View style={{ marginTop: 20 }}>
              <Unorderedlist
                bulletUnicode={0x2022}
                style={{ fontSize: 30 }}
                color={colors.secondary}
              >
                <Text style={{ fontSize: 25 }}>Vg 3</Text>
                <Unorderedlist
                  bulletUnicode={0x25e6}
                  color={colors.secondary}
                  style={{ fontSize: 20 }}
                >
                  <Text style={{ fontSize: 20 }}>1A - kl 12</Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x25e6}
                  color={colors.secondary}
                  style={{ fontSize: 20 }}
                >
                  <Text style={{ fontSize: 20 }}>1B - kl 13</Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x25e6}
                  color={colors.secondary}
                  style={{ fontSize: 20 }}
                >
                  <Text style={{ fontSize: 20 }}>1C - kl 15</Text>
                </Unorderedlist>
              </Unorderedlist>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
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
    marginTop: 20,
    marginBottom: 20
  },
  list: {
    backgroundColor: colors.secondaryLight,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    borderRadius: 15
  }
});

export default HenteBokScreen;
