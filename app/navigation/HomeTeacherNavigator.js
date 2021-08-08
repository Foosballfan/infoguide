import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import TeacherWelcomeScreen from "../screens/TeacherWelcomeScreen";
import Festival from "../screens/Festival";
import MiljoScreenTeacher from "../screens/MiljoTeamTeacher";
import TeachersTimeframe from "../screens/TeachersTimeframe";
import TeachersOverView from "../screens/TeachersOverView";
import SosialeAktiviteter from "../screens/SosialeAktiviteter";

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
    <Stack.Screen
      name="TeachersTimeframe"
      component={TeachersTimeframe}
      options={{
        title: "TIDSHJUL",
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
      name="TeachersOverView"
      component={TeachersOverView}
      options={{
        title: "HVEM GJØR HVA",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 1
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
          letterSpacing: 1
        },

        headerTintColor: colors.white
      }}
    />
    <Stack.Screen
      name="SosialeAktiviteter"
      component={SosialeAktiviteter}
      options={{
        title: "SOSIALT",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "bold",
          letterSpacing: 1
        },

        headerTintColor: colors.white
      }}
    />
  </Stack.Navigator>
);

export default HomeTeacherNavigator;
