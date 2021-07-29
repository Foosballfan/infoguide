import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OmSkolen from "../screens/OmSkolen";
import InfoScreen from "../screens/InfoScreen";
import KontaktScreen from "../screens/KontaktScreen";

const Tab = createBottomTabNavigator();

const AppNavTeacher = () => <Tab.Navigator></Tab.Navigator>;

export default AppNavTeacher;
