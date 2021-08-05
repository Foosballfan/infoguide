import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import * as Linking from "expo-linking";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

export default class Studieverksted extends Component {
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
            color="secondary"
            title="Studieverksted"
            onPress={this.componentHideAndShow}
          />
          {// Display the content in screen when state object "content" is true.
          // Hide the content in screen when state object "content" is false.
          this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/studieverksted.jpg")}
              />
              <AppText style={styles.headerText}>
                Studieverkstedet på Kvadraturen vgs er sentralt plassert i
                første etasje ved hovedinngangen, i nær tilknytning til kantine
                og servicetorg. Her finner du både bibliotek, samt andre
                elevtjenester som rådgivere, IT-brukerstøtte og miljøteam.{"\n"}
                {"\n"}
                Vi som arbeider på Studieverkstedet står klar til å svare på
                spørsmål om alt fra bøker og nettressurser til
                karriereveiledning, PC-feil m.m. Her finner du også en printer
                du kan benytte deg av.{"\n"}
                {"\n"}Studieverkstedet er både et møtested og et studiested. Her
                kan du treffe venner, spille spill, gjøre lekser og lese bøker,
                blader og aviser. Bøkene og bladene er til utlån. Hvis du ikke
                finner den boka du ønsker å lese, skaffer vi den fra et annet
                bibliotek. Vil du ha gratis tilgang til lydbøker og digitale
                bøker og blader, viser vi deg hvordan. Her kan du også låne PC,
                PC- lader og kalkulator på dagslån. Spør oss om du lurer på noe!
                {"\n"}
                {"\n"}Bibliotekar på Studieverkstedet:{"\n"}Åse Helleren E-post:
                {"\n"}Ase.Helleren@kvadraturen.vgs.no{"\n"}Tlf: 92 42 06 36 / 38
                07 73 95 {"\n"}Søk etter bøker og annet utlånsmateriell kan du
                finne på Studieverkstedet sine egne sider for biblioteket:{"\n"}
                Avtale ang utlån av lærebøker og andre bøker finner du
                her Reglement for utlån lærebøker.{"\n"}Tips og lenker til
                digitale lærebøker og annen digital info:
              </AppText>
              <TouchableOpacity
                style={styles.Links}
                onPress={() => {
                  Linking.openURL(
                    "https://kvadraturen-vgs.mikromarc.no/mikromarc3/default.aspx?Unit=6471&amp%3Bdb=kvadraturen-vgs"
                  );
                }}
              >
                <AppText style={{ color: "blue" }}>Søk etter bøker</AppText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Links}
                onPress={() => {
                  Linking.openURL(
                    "https://kvadraturen.vgs.no/for-elever/digitale-laremidler/"
                  );
                }}
              >
                <AppText style={{ color: "blue" }}>
                  Tips og lenker til digitale lærebøker og annen digital info
                </AppText>
              </TouchableOpacity>
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
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20
  },
  Links: {
    margin: 10
  }
});
