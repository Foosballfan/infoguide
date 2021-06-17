import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Card from "./Card";
import Screen from "./Screen";
import AppText from "../components/AppText";

const listings = [
  {
    id: 1,
    title: "Henting av Bøker og PC",
    subTitle:
      " Nå kan du hente bøker og pc på biblioteket, sjekk timeplaf for når din klasse. ",
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
  },
  {
    id: 5,
    title: "Finn frem på skolen",
    subTitle: " Det kan være skummelt med skolestart...",
    image: require("../assets/kvadda.png")
  },
  {
    id: 6,
    title: "Aktiviteter i lunsjen",
    subTitle: " Det kan være skummelt med skolestart...",
    image: require("../assets/kvadda.png")
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
            onPress={() => navigation.navigate("", item)}
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
