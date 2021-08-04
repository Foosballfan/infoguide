import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import InfoTeacherNavigator from "../navigation/InfoTeacherNavigator";
import SchoolTeacherNavigator from "../navigation/SchoolTeacherNavigator";
import ContactTeacherNavigator from "../navigation/ContactTeacherNavigator";
import colors from "../config/colors";

import HomeTeacherNavigator from "../navigation/HomeTeacherNavigator";

const Tab = createBottomTabNavigator();

const AppNavTeacher = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
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
      component={HomeTeacherNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Om Skolen"
      component={SchoolTeacherNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="school" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoTeacherNavigator}
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
      component={ContactTeacherNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavTeacher;
