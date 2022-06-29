import { Flex } from "native-base";
import React, { memo } from "react";
import BottomBar from "./BottomBar";

const ARContainer = ({ navigation }) => {
  return (
    <Flex height="100%" justifyContent="space-between">
      <Flex>AR</Flex>
      <BottomBar navigation={navigation} />
    </Flex>
  );
};

export default memo(ARContainer);
