import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import Festival from "./app/screens/Festival";

export default function App() {
  return (
    /* <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>*/
    <Festival />
  );
}
