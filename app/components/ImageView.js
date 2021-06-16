import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import Card from "./Card";
import Screen from "./Screen";

const listings = [
  {
    id: 1,
    title: "Henting av Bøker og PC",
    subTitle:
      " Nå kan du hente bøker og pc på biblioteket, sjekk timeplaf for når din klasse.. ",
    image: require("../assets/books-computer.jpg")
  },
  {
    id: 2,
    title: "Tur til Odderøya",
    subTitle: "Pakk sekken for en hyggelig åpningstur til odderøya.",
    image: require("../assets/odderoya.jpg")
  },
  {
    id: 3,
    title: "Fotografering",
    subTitle: " Det vil foregå fotografering ...",
    image: require("../assets/fotografering.jpeg")
  },
  {
    id: 4,
    title: "Trenger du noen å snakke med?",
    subTitle: " Det kan være skummelt med skolestart...",
    image: require("../assets/thea.jpg")
  }
];

function ImageView(props) {
  return (
    <Screen>
      <FlatList
        horizontal
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={{
              width: 200,
              height: "20",
              flexDirection: "row"
            }}
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

export default ImageView;
