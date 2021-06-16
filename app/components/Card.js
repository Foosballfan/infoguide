import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ title, subTitle, image }) {
  return (
    <SafeAreaView>
      <View style={styles.siteContainer}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText numberOfLines={3} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  siteContainer: {
    backgroundColor: colors.secondary
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    marginTop: 30,
    marginHorizontal: 10,
    overflow: "hidden",
    width: 200,
    height: 250
  },
  image: {
    width: "100%",
    height: 120
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 16
  },
  subTitle: {
    color: "gray",
    fontSize: 14
  }
});

export default Card;
