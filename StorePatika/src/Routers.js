import React from "react";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
