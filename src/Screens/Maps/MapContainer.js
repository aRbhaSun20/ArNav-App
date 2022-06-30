import { Flex, Text } from "native-base";
import React, { memo, useEffect, useMemo, useState } from "react";
import BottomBar from "./BottomBar";
import { LeafletView } from "react-native-leaflet-view";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Location from "expo-location";

const DEFAULT_COORDINATE = {
  lat: 12.9794048,
  lng: 77.594624,
};

function MapContainer({ navigation }) {
  const [location, setLocation] = useState({
    coords: { latitude: 0, longitude: 0 },
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let cLocation = await Location.getCurrentPositionAsync({});
      setLocation(cLocation);
    })();
  }, []);

  const getCurrentShortLocation = useMemo(() => {
    if (location?.coords?.latitude && location?.coords?.longitude) {
      return {
        lat: location?.coords?.latitude,
        lng: location?.coords?.longitude,
      };
    }
    return DEFAULT_COORDINATE;
  }, [location?.coords?.latitude, location?.coords?.longitude]);

  return (
    <Flex height="100%" justifyContent="space-between">
      <SafeAreaView style={styles.root}>
        <LeafletView
          mapMarkers={[
            {
              position: getCurrentShortLocation,
              icon: "📍",
              size: [32, 32],
            },
          ]}
          doDebug={false}
          mapCenterPosition={getCurrentShortLocation}
        />
      </SafeAreaView>
      <BottomBar navigation={navigation} />
    </Flex>
  );
}

export default memo(MapContainer);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
