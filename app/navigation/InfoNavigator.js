import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import OmSkolen from "../screens/OmSkolen";
import colors from "../config/colors";
import InfoScreen from "../screens/InfoScreen";

const Stack = createStackNavigator();

const InfoNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="InfoScreen"
      component={InfoScreen}
      options={{
        headerShown: true,
        title: "INFO",
        headerLeft: null,
        headerStyle: {
          backgroundColor: colors.secondary
        },
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 2
        },
        headerTintColor: colors.white
      }}
    />
  </Stack.Navigator>
);
const styles = StyleSheet.create({
  container: {}
});

export default InfoNavigator;
