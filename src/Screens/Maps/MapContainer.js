import { Flex } from "native-base";
import React, { memo } from "react";
import BottomBar from "./BottomBar";

function MapContainer({ navigation }) {
  return (
    <Flex height="100%" justifyContent="space-between">
      <Flex>Map</Flex>
      <BottomBar navigation={navigation} />
    </Flex>
  );
}

export default memo(MapContainer);
