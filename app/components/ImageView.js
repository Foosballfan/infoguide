import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Card from "./Card";
import Screen from "./Screen";
import AppText from "../components/AppText";

const listings = [
  {
    id: 1,
    title: "Hva skjer frem til høstferien",
    subTitle: " Se hva som skjer på skolen frem til høstferien ",
    image: require("../assets/calendar.png")
  },
  {
    id: 2,
    title: "Henting av Bøker og PC",
    subTitle:
      " Nå kan du hente bøker og pc på biblioteket, sjekk timeplaf for når din klasse. ",
    image: require("../assets/books-computer.jpg")
  },
  {
    id: 3,
    title: "Tur til Odderøya",
    subTitle: "Pakk sekken for en hyggelig åpningstur til odderøya.",
    image: require("../assets/odderoya.jpg")
  },
  {
    id: 4,
    title: "Fotografering",
    subTitle: " Det vil foregå fotografering ...",
    image: require("../assets/fotografering.jpeg")
  },
  {
    id: 5,
    title: "Trenger du noen å snakke med?",
    subTitle: " Det kan være skummelt med skolestart...",
    image: require("../assets/miljoteam.jpg")
  },
  {
    id: 6,
    title: "Finn frem på skolen",
    subTitle: " Det kan være skummelt med skolestart...",
    image: require("../assets/kvadda.png")
  },
  {
    id: 7,
    title: "Aktiviteter i lunsjen",
    subTitle:
      " Det vil være gøye aktviteter i lunsjen fremvoer, se oversikt over hva som skjer",
    image: require("../assets/games.jpg")
  }
];

function ImageView({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.description}>Siste nytt ⚡️</AppText>
      </View>
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
            onPress={() => navigation.navigate("StudentTimeline")}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  description: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  }
});

export default ImageView;
