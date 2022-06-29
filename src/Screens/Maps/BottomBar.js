import { Center, Flex, Icon, Text } from "native-base";
import { memo } from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BottomBar = ({ navigation }) => {
  return (
    <Flex
      borderTopRadius={20}
      w="100%"
      bg="blue.200"
      direction="row"
      // alignItems="center"
      p={2}
      justifyContent="space-around"
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MapContainer");
        }}
      >
        <Center>
          <Icon size="xl" as={MaterialIcons} name="map" color="black" />
          <Text>Map</Text>
        </Center>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ARContainer");
        }}
      >
        <Center>
          <Icon size="xl" as={MaterialIcons} name="view-in-ar" color="black" />
          <Text>AR</Text>
        </Center>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("QRContainer");
        }}
      >
        <Center>
          <Icon size="xl" as={MaterialIcons} name="qr-code" color="black" />
          <Text>QR Scan</Text>
        </Center>
      </TouchableOpacity>
    </Flex>
  );
};

export default memo(BottomBar);
