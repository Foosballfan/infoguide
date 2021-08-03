import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Card from "./Card";
import Screen from "./Screen";
import AppText from "../components/AppText";

const listings = [
  {
    id: 1,
    title: "Hva skjer første uken",
    subTitle:
      " Det er mye som skjer første uken på skolen, se oversikt over her ",
    image: require("../assets/firstweek.jpg")
  },
  {
    id: 2,
    title: "Trenger du noen å snakke med?",
    subTitle: " Det kan være skummelt med skolestart...",
    image: require("../assets/miljoteam.jpg")
  },
  {
    id: 3,
    title: "Se viktige datoer frem til høstferien",
    subTitle: " Det er mye som skjer den første mnd på skolen, se oversikt her",
    image: require("../assets/calendar.png")
  },
  {
    id: 4,
    title: "Aktiviteter i lunsjen",
    subTitle:
      " Det vil være gøye aktviteter i lunsjen fremvoer, se oversikt over hva som skjer",
    image: require("../assets/games.jpg")
  }
];

function ImageView({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.description}>Siste nytt ⚡️</AppText>
      </View>
      <FlatList
        horizontal
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.Card}
            title={"hei"}
            subTitle={"hei"}
            image={require("../assets/games.jpg")}
            onPress={() => navigation.navigate("StudentTimeline", item)}
          />
        )}
      />
    </>
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
  },
  Card: {
    width: 200,
    height: "20",
    flexDirection: "row"
  }
});

export default ImageView;
