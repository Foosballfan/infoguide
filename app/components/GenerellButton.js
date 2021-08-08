import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";

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
            color="secondary"
            title="Info om skolen"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/kvadda3.jpg")}
              />
              <AppText style={styles.headerText}>
                Kvadraturen videregående skole en stor kombinert videregående
                skole med over 1000 elever som kan tilby et mangfold av
                utdanningstilbud innen yrkesfag og studiespesialiserende
                utdanningsløp. Skolens visjon for læring er &quot;Her er - og
                blir du noe&quot;. Vi setter eleven i sentrum for
                læringsarbeidet, og gjennom tilpasset opplæring skal alle elever
                bli utfordret til å utvikle sosial og faglig kompetanse og
                oppleve mestring. Elevene skal møte dyktige og engasjerte
                ansatte, som gjennom sin klasseledelse bygger relasjoner og
                skaper et trygt og forutsigbart læringsmiljø. Undervisningen
                skal være forsknings- og kunnskapsbasert, og samtidig
                virkelighetsnær. Helse og teknologi er skolens uttalte
                utviklingsområder!
              </AppText>
              <AppText style={styles.headerText}>
                Kvadraturen videregående skole er en skole i endring – en skole
                for framtiden, som vektlegger å være oppdatert både teknisk,
                pedagogisk og metodisk. Vi vil utvikle en skole som:{"\n"}●
                Legger til rette for tilpasset opplæring for alle grupper elever
                på en mest mulig inkluderende og omsorgsfull måte.{"\n"}● Gir
                elevene muligheter til å utvikle både de kreative og sosiale
                evnene ved siden av de faglige. {"\n"}● Oppfordrer elevene til å
                være aktive og informasjonssøkende. {"\n"}● Oppfordrer til
                samarbeid over faggrenser mellom lærere og elever. {"\n"}● Tar
                vare på de tilsatte og legger til rette for personlig; faglig,
                pedagogisk og sosial utvikling. henvise deg om du lurer på noe.
                samarbeid over faggrenser mellom lærere og elever. {"\n"}● Tar
                vare på den enkelte avdelings egenart og skolens fellesskap.{" "}
                {"\n"}● Gir mulighet til å ta vare på yrkestradisjoner, men i
                stor grad også åpner for nye undervisningsmetoder.
                {"\n"}● Satser på helhet i utdanningen gjennom
                ferdighetstrening, kunnskapssøking, yrkesretting,
                prosjektarbeid, temaundervisning, tverrfaglighet, IKT og bruk av
                ulike medier.
                {"\n"}● Fremstår som et tverrkulturelt møtested.
                {"\n"}● Åpner seg både mot lokalsamfunnet og mot nasjonale og
                internasjonale kontakter.
              </AppText>
              <AppText style={styles.headerText}>
                Skolen er meget opptatt i å engasjere seg i dagsaktuelle
                problemstillinger, og er blant annet en av medlemsskolene i
                FN-sambandet. Dette vil si at skolen støtter og arbeider for FNs
                bærekraftsmål; Verdens felles arbeidsplan for å utrydde
                fattigdom, bekjempe ulikhet og stoppe klimaendringene innen
                2030. I tillegg er skolen aktive i kampen for et bedre- og mer
                bærekraftig miljø.
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
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20
  }
});
