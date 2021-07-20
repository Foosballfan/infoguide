import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import AppNavigator from "./AppNavigator";
import HenteBokScreen from "../screens/HenteBokScreen";
import StudentWelcomeScreen from "../screens/TeacherWelcomeScreen";

const Stack = createStackNavigator();

const CardNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={StudentWelcomeScreen}
      options={{
        headerShown: false,
        title: "Tilbake"
      }}
    />
    <Stack.Screen
      name="StudentWelcomeScreen"
      component={AppNavigator}
      options={{
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
      name="TeacherWelcomeScreen"
      component={AppNavTeacher}
      options={{
        title: "ANSATTE",
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

export default CardNavigator;
