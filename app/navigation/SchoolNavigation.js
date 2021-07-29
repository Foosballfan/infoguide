import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import OmSkolen from "../screens/OmSkolen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const SchoolNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={OmSkolen}
      options={{
        headerShown: true,
        title: "OM SKOLEN",
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
  </Stack.Navigator>
);
const styles = StyleSheet.create({
  container: {}
});

export default SchoolNavigation;
