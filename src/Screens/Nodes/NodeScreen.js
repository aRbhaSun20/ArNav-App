import React, { useMemo, useState } from "react";
import { ScrollView, Heading, Center, VStack, Flex, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image, RefreshControl } from "react-native";

import Card from "../../components/Card";
import TopBar from "../../components/TopBar";
import { useNodeQuery } from "../../reduxStore/Locations";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BackButton from "../../components/BackButton";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { NODE_ACTIONS } from "../../reduxStore/NodeReducers";

const Stack = createNativeStackNavigator();

function NodeScreen({ navigation }) {
  return (
    <React.Fragment>
      <TopBar navigation={navigation} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"NodeScreen"}
      >
        <Stack.Screen name="NodeScreen" component={NodeDataSc} />
        <Stack.Screen name="NodeQR" component={NodeQR} />
      </Stack.Navigator>
    </React.Fragment>
  );
}

const NodeDataSc = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { NodeData, NodeRefetch } = useNodeQuery();
  const dispatch = useDispatch();

  const data = useMemo(() => {
    if (Array.isArray(NodeData?.nodes)) {
      return NodeData?.nodes;
    }
    return [];
  }, [NodeData]);

  const navigationQR = (node) => {
    dispatch({ type: NODE_ACTIONS.NODE_CHANGE, payload: node });
    navigation.navigate("NodeQR");
  };

  const onRefresh = () => {
    setRefreshing(true);
    NodeRefetch().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <React.Fragment>
      <Center>
        <Heading padding="3">Node Details</Heading>
      </Center>

      <ScrollView
        h="80"
        _contentContainerStyle={{
          px: "20px",
          mb: "10",
          minW: "72",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        mb="2"
      >
        <VStack space={3}>
          {data.map((node, i) => (
            <Card
              key={i}
              imgSrc={node?.imageUrl}
              type="Nodes"
              userName={node?.user?.name}
              name={node?.placeName}
              qr={`${node.parentId},${node?._id}`}
              execute={() =>
                navigationQR({
                  qr: `${node.parentId},${node?._id}`,
                  name: node?.placeName,
                })
              }
            />
          ))}
        </VStack>
      </ScrollView>
    </React.Fragment>
  );
};

const NodeQR = ({ navigation }) => {
  const nodes = useSelector((state) => state.node);

  return (
    <VStack space={2} height="100%">
      <BackButton goBack={() => navigation.navigate("NodeScreen")} />
      <Center>
        <VStack
          style={{
            alignItems: "center",
            // position: "relative",
          }}
          top="6"
          background="#67d139"
          space={4}
          maxWidth={350}
          borderWidth={4}
          p={3}
        >
          <Image
            style={{ width: 128, height: 128 }}
            source={require("../../assets/logo.jpeg")}
          />
          <Text
            fontSize="3xl"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            {nodes.name}
          </Text>
          <Flex
            p={4}
            background="white"
            // maxW={120}
            borderWidth={4}
          >
            <QRCode value={nodes.qr} />
          </Flex>
        </VStack>
      </Center>
    </VStack>
  );
};

export default NodeScreen;
