import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import StudentWelcomeScreen from "./app/screens/StudentWelcomeScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return <ListingScreen />;
}
