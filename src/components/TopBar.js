import "react-native-gesture-handler";

import { Box, Text, HStack, Icon, IconButton, StatusBar } from "native-base";
import React, { memo } from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function TopBar({ navigation }) {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />

      <Box safeAreaTop bg="blue.200" />
      <HStack
        bg="blue.600"
        // px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        // left="-10"
      >
        <HStack alignItems="center">
          <IconButton
            onPress={() => {
              toggleDrawer();
            }}
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            ArNav
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

export default memo(TopBar);
