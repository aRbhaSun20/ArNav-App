import React from "react";
import Profile from "./Screens/Profile/Profile";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/Home/HomeScreen";

const Drawer = createDrawerNavigator();

function DrawerComp() {
  return (
    <React.Fragment>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerLabel: "Home" }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Profile}
          options={{ drawerLabel: "Profile" }}
        />
      </Drawer.Navigator>
    </React.Fragment>
  );
}

export default DrawerComp;
