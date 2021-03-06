import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";

import KontaktScreenTeacher from "../screens/KontaktScreenTeacher";

import Ledelsen from "../screens/Ledelsen";
import MiljoScreenTeacher from "../screens/MiljoTeamTeacher";
import HelseTeacher from "../screens/HelseTeacher";

const Stack = createStackNavigator();

const ContactTeacherNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="KontaktScreen"
      component={KontaktScreenTeacher}
      options={{
        headerShown: true,
        title: "KONTAKT",
        headerLeft: null,
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 2
        },
        headerTintColor: colors.white
      }}
    />
    <Stack.Screen
      name="MiljoScreenTeacher"
      component={MiljoScreenTeacher}
      options={{
        title: "MILJØTEAM",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 2
        },

        headerTintColor: colors.white
      }}
    />
    <Stack.Screen
      name="HelseTeacher"
      component={HelseTeacher}
      options={{
        title: "HELSE",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 2
        },

        headerTintColor: colors.white
      }}
    />
    <Stack.Screen
      name="Ledelsen"
      component={Ledelsen}
      options={{
        title: "LEDELSEN",
        headerStyle: {
          backgroundColor: colors.primary
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

export default ContactTeacherNavigator;
