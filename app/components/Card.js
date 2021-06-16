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
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  siteContainer: {
    backgroundColor: "#24AE80"
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    marginTop: 30,
    marginHorizontal: 20,
    overflow: "hidden",
    width: 300,
    height: 350
  },
  image: {
    width: "100%",
    height: 200
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold"
  },
  subTitle: {
    color: "gray"
  }
});

export default Card;
