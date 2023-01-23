import "react-native-gesture-handler";
import { View, Text, StatusBar, Pressable, Keyboard } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}
