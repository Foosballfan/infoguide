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
            title="teams"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <Image
                style={styles.image}
                source={require("../assets/teams.png")}
              />
              <AppText style={styles.headlineDesc}>TEAMS</AppText>
              <AppText style={styles.headlineDesc}>
                Her finner du en overikt over alle Microsoft
                Teams-videoopplærings filmer.
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://support.microsoft.com/nb-no/office/microsoft-teams-videooppl%C3%A6ring-4f108e54-240b-4351-8084-b1089f0d21d7"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Microsoft Teams-videoopplæring
                </AppText>
              </TouchableOpacity>
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
