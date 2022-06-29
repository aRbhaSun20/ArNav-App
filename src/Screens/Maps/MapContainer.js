import { Flex } from "native-base";
import React, { memo } from "react";
// import { Dimensions, StyleSheet } from "react-native";
// import MapView from "react-native-maps";
import BottomBar from "./BottomBar";

function MapContainer({ navigation }) {
  return (
    <Flex height="100%" justifyContent="space-between">
      <Flex>
        {" "}
        {/* <MapView style={styles.map} /> */}
      </Flex>
      <BottomBar navigation={navigation} />
    </Flex>
  );
}

export default memo(MapContainer);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
