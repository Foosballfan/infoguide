import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import OmSkolenTeacher from "../screens/OmSkolenTeacher";
import colors from "../config/colors";

const Stack = createStackNavigator();

const SchoolNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={OmSkolenTeacher}
      options={{
        headerShown: true,
        title: "OM SKOLEN",
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

export default SchoolNavigation;
