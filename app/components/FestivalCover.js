import React from "react";
import { View, StyleSheet, Image } from "react-native";

function FestivalCover(props) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/oppstartsfestivalen.png")}
          resizeMode={"cover"}
          style={styles.image}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: 170
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default FestivalCover;
