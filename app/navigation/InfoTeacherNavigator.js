import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import OmSkolen from "../screens/OmSkolen";
import colors from "../config/colors";
import InfoScreenTeacher from "../screens/InfoScreenTeacher";

const Stack = createStackNavigator();

const InfoTeacherNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="InfoScreen"
      component={InfoScreenTeacher}
      options={{
        headerShown: true,
        title: "INFO",
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
  </Stack.Navigator>
);
const styles = StyleSheet.create({
  container: {}
});

export default InfoTeacherNavigator;
