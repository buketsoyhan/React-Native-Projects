import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./pages/Category";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            title: "Categories",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#FFA500", fontSize:26, fontWeight:'bold' },
            headerTitleAlign:'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;