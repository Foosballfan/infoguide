import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import AppText from "./AppText";
import InfoButton from "./InfoButton";

import Unorderedlist from "react-native-unordered-list";

export default class Servicetorget extends Component {
  constructor() {
    super();
    this.state = {
      content: false
    };
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <InfoButton
            color="primary"
            title="ItsLearning"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/Itslearning.png")}
              />
            </>
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start"
  },
  headerText: {
    fontSize: 20,
    margin: 10
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 10
  },
  headlineDesc: {
    fontSize: 23,
    fontWeight: "500",
    marginBottom: 10
  }
});
