import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";

import KontaktScreen from "../screens/KontaktScreen";
import MiljoScreen from "../screens/MiljoScreen";
import LedelsenStudent from "../screens/LedelsenStudent";
import HelseScreen from "../screens/HelseScreen";

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
    <Stack.Screen
      name="LedelsenStudent"
      component={LedelsenStudent}
      options={{
        title: "LEDELSEN",
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
      name="HelseScreen"
      component={HelseScreen}
      options={{
        title: "HELSE",
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

export default ContactNavigator;
