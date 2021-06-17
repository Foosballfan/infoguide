import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import StudentWelcomeScreen from "../screens/StudentWelcomeScreen";
import AuthNavigator from "../navigation/AuthNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Hjem"
      component={AuthNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Om Skolen"
      component={StudentWelcomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="school" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Info"
      component={StudentWelcomeScreen}
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
      component={StudentWelcomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
