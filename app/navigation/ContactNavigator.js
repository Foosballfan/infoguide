import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";

import KontaktScreen from "../screens/KontaktScreen";
import MiljoScreen from "../screens/MiljoScreen";

const Stack = createStackNavigator();

const ContactNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="KontaktScreen"
      component={KontaktScreen}
      options={{
        headerShown: true,
        title: "KONTAKT",
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
    <Stack.Screen
      name="MiljoScreen"
      component={MiljoScreen}
      options={{
        title: "MILJØ",
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

export default ContactNavigator;
