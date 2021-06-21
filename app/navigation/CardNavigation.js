import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import AppNavigator from "./AppNavigator";
import HenteBokScreen from "../screens/HenteBokScreen";

const Stack = createStackNavigator();

const CardNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HenteBokScreen"
      component={AppNavigator}
      options={{
        title: "Henting",
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

export default CardNavigator;
