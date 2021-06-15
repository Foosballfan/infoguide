import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Henting av Bøker og PC",
    subTitle:
      " Nå kan du hente bøker og pc på biblioteket. Sjekk oversikt over når din klasse kan hente",
    image: require("../assets/books-computer.jpg")
  },
  {
    id: 2,
    title: "Tur til Odderøya",
    subTitle: "Pakk sekken for en hyggelig tur til Odderøya",
    image: require("../assets/books-computer.jpg")
  },
  {
    id: 3,
    title: "Fotografering",
    subTitle:
      " Det vil foregå fotografering av alle klasser, sjekk timeplan for din klasse.",
    image: require("../assets/books-computer.jpg")
  },
  {
    id: 4,
    title: "Trenger du noen å snakke med?",
    subTitle:
      " Det kan være skummelt med skolestart, men på Kvadraturen har du et trygt team i ryggen uansett hva.",
    image: require("../assets/books-computer.jpg")
  }
];

function ListingScreen(props) {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ListingScreen;
