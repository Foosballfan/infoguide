import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ onPress, navigation }) {
  return (
    <>
      <ScrollView horizontal>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../assets/firstweek.jpg")}
              />

              <AppText style={styles.title}>
                Se hva som skjer den første uken
              </AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                Det er mye som skjer første uken på skolen, se oversikt over din
                klasse her
              </AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={require("../assets/games.jpg")}
              />

              <AppText style={styles.title}>test tittel</AppText>
              <AppText numberOfLines={3} style={styles.subTitle}>
                test subtitle
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,

    flexDirection: "row"
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 12,
    overflow: "hidden",
    width: 200,
    height: 280
  },
  image: {
    width: "100%",
    height: 140
  },
  detailsContainer: {
    padding: 10
  },
  title: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 18
  },
  subTitle: {
    color: "gray",
    fontSize: 16,
    marginHorizontal: 5
  },
  description: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  }
});

export default Card;
