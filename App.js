import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import StudentWelcomeScreen from "./app/screens/StudentWelcomeScreen";
import Header from "./app/components/Header";

export default function App() {
  return <StudentWelcomeScreen />;
}
