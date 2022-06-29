import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Flex } from "native-base";
import React from "react";
import TopBar from "../../components/TopBar";
import ARContainer from "./ARContainer";
import BottomBar from "./BottomBar";
import MapContainer from "./MapContainer";
import QRContainer from "./QRContainer";

const Stack = createNativeStackNavigator();

function MapScreen({ navigation }) {
  return (
    <React.Fragment>
      <TopBar navigation={navigation} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"MapContainer"}
      >
        <Stack.Screen name="MapContainer" component={MapContainer} />
        <Stack.Screen name="ARContainer" component={ARContainer} />
        <Stack.Screen name="QRContainer" component={QRContainer} />
      </Stack.Navigator>
    </React.Fragment>
  );
}

export default MapScreen;
