import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import OmSkolen from "../screens/OmSkolen";

const Stack = createStackNavigator();

const SchoolNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={OmSkolen}
      options={{
        headerShown: true,
        title: "OM SKOLEN"
      }}
    />
  </Stack.Navigator>
);
const styles = StyleSheet.create({
  container: {}
});

export default SchoolNavigation;
