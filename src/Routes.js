import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";
import { useSelector } from "react-redux";
import ForgotPasswordScreen from "./Screens/Auth/ForgotPasswordScreen";
import Login from "./Screens/Auth/Login";
import RegisterScreen from "./Screens/Auth/RegisterScreen";
import ParentScreen from "./Screens/Parent/ParentScreen";
import Profile from "./Screens/Profile/Profile";
import TopBar from "./components/TopBar";
import NodeScreen from "./Screens/Nodes/NodeScreen";
import LocationScreen from "./Screens/Location/LocationScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function Routes() {
  const user = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenListeners={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginNavigator}
        />
        <Drawer.Screen
          name="Parent"
          options={{ headerShown: false, title: "Parents" }}
          component={ParentScreen}
        />
        <Drawer.Screen
          name="Nodes"
          options={{ headerShown: false }}
          component={NodeScreen}
        />
        <Drawer.Screen
          name="Locations"
          options={{ headerShown: false }}
          component={LocationScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Auth"}
    >
      <Stack.Screen name="Auth" component={Login} />
      <Stack.Screen name="Forget" component={ForgotPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
