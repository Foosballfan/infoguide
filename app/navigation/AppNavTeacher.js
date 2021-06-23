import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import StudentWelcomeScreen from "../screens/StudentWelcomeScreen";
import AuthNavigator from "../navigation/AuthNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../config/colors";
import HenteBokScreen from "../screens/HenteBokScreen";
import OmSkolen from "../screens/OmSkolen";
import InfoScreen from "../screens/InfoScreen";
import KontaktScreen from "../screens/KontaktScreen";
import TeacherWelcomeScreen from "../screens/TeacherWelcomeScreen";

const Tab = createBottomTabNavigator();

const AppNavTeacher = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Hjem"
      component={TeacherWelcomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Om Skolen"
      component={OmSkolen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="school" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoScreen}
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
      component={KontaktScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavTeacher;
