import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../config/colors";
import AppNavigator from "./AppNavigator";
import StudentTimeline from "../screens/StudentTimeline";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
        title: "Tilbake"
      }}
    />
    <Stack.Screen
      name="HomeNavigator"
      component={AppNavigator}
      options={{
        headerShown: false,
        title: "ELEVER",
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
      name="StudentTimeline"
      component={StudentTimeline}
      options={{
        title: "Årshjulet",
        headerStyle: {
          backgroundColor: colors.darkBlue
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

export default AuthNavigator;
