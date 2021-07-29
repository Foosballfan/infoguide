import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import StudentWelcomeScreen from "../screens/StudentWelcomeScreen";
import Festival from "../screens/Festival";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StudentWelcomeScreen"
      component={StudentWelcomeScreen}
      options={{
        headerShown: true,
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
      name="Festival"
      component={Festival}
      options={{
        title: "FESTIVAL",
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

export default HomeNavigator;
