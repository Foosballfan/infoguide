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
            title="Annet"
            onPress={this.componentHideAndShow}
          />
          {this.state.content ? (
            <>
              <AppText style={styles.headlineDesc}>Annet</AppText>
              <AppText style={styles.text}>
                På utdanningsdirektoratet sine sider kan du finne alt du trenger
                å vite om utdanning, regelverk, forskning, læring, kompetanse,
                eksamen, m. m
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.udir.no/ ");
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  UDIR
                </AppText>
              </TouchableOpacity>

              <AppText style={styles.text}>
                🦠 Vi oppfordrer også alle til å holde seg oppdatert på
                smittevern.
              </AppText>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://login.microsoftonline.com/52a9e52e-d918-401d-aafb-0dc14ac08e17/oauth2/authorize?client_id=00000003-0000-0ff1-ce00-000000000000&response_mode=form_post&protectedtoken=true&response_type=code%20id_token&resource=00000003-0000-0ff1-ce00-000000000000&scope=openid&nonce=FAAECD7B2D97D5ED332363DD51D75339870D55195D13DDDE-E6E43D764F6005785ECF17E75CB0F96395733C3E83F9153B4571F10D882E1992&redirect_uri=https%3A%2F%2Fiktagder.sharepoint.com%2F_forms%2Fdefault.aspx&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083-87e0-41b5-bb78-0bc43c8a8e8a&client-request-id=2786e49f-4004-2000-d0c9-dbe0dd95bff0"
                  );
                }}
              >
                <AppText style={{ color: "blue", marginBottom: 15 }}>
                  Korona - det du trenger å vite! (sharepoint.com){" "}
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
