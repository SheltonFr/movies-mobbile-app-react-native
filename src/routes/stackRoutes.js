import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import  Detail  from "../pages/Detail";

const {Navigator, Screen} = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen 
        name="Home" 
        component={Home}
        
        />

        <Screen 
          name="Detail"
          component={Detail}
          options={{title: "Detalhes"}}
        />
    </Navigator>
  );
};

export default StackRoutes;