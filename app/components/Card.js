import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function Card({ title, subTitle, image, onPress }) {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={onPress}>
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  siteContainer: {},
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
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 18
  },
  subTitle: {
    color: "gray",
    fontSize: 16
  }
});

export default Card;
