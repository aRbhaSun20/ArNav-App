import {
  AspectRatio,
  Text,
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  Icon,
  IconButton,
  Flex,
} from "native-base";
import React from "react";
import { Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Card({ imgSrc, type, name, userName, desc, dist, qr }) {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: imgSrc,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="blue.600"
            _dark={{
              bg: "blue.800",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {type}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Flex direction="row" justifyContent="space-between">
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {name}
              </Heading>
              <Text
                fontSize="sm"
                _light={{
                  color: "blue.800",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {userName}
              </Text>
            </Stack>
            {qr && (
              <IconButton
                onPress={() => {
                  // toggleDrawer();
                }}
                icon={
                  <Icon
                    size="lg"
                    as={MaterialIcons}
                    name="near-me"
                    color="red"
                  />
                }
              />
            )}
          </Flex>

          {desc && <Text fontWeight="400">{desc}</Text>}
          {dist && (
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {dist} m
                </Text>
              </HStack>
            </HStack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
