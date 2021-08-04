import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import HomeNavigator from "../navigation/HomeNavigator";
import InfoNavigator from "../navigation/InfoNavigator";
import SchoolNavigation from "../navigation/SchoolNavigation";
import ContactNavigator from "../navigation/ContactNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.secondary,
      style: {
        backgroundColor: "rgba(225, 255, 255, 0.95)",
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0
      }
    }}
  >
    <Tab.Screen
      name="Hjem"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Om Skolen"
      component={SchoolNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="school" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="information-outline"
            color={color}
            size={size}
          />
        )
      }}
    />
    <Tab.Screen
      name="Kontakt"
      component={ContactNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
