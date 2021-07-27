import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import AppNavigator from "./AppNavigator";
import HenteBokScreen from "../screens/HenteBokScreen";
import StudentWelcomeScreen from "../screens/TeacherwelcomeScreen";
import Festival from "../screens/Festival";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StudentWelcomeScreen"
      component={StudentWelcomeScreen}
      options={{
        headerShown: true,
        title: "ELEVER test",
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

export default HomeNavigator;
