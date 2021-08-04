import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import TeacherWelcomeScreen from "../screens/TeacherWelcomeScreen";
import Festival from "../screens/Festival";
import StudentTimeline from "../screens/StudentTimeline";
import MiljoScreen from "../screens/MiljoScreen";

const Stack = createStackNavigator();

const HomeTeacherNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StudentWelcomeScreen"
      component={TeacherWelcomeScreen}
      options={{
        headerShown: true,
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

export default HomeTeacherNavigator;
