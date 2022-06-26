import React, { useMemo } from "react";
import { ScrollView, Heading, Center, VStack } from "native-base";

import Card from "../../components/Card";
import TopBar from "../../components/TopBar";
import { useNodeQuery } from "../../reduxStore/Locations";

function NodeScreen({ navigation }) {
  const { NodeData } = useNodeQuery();

  const data = useMemo(() => {
    if (Array.isArray(NodeData?.nodes)) {
      return NodeData?.nodes;
    }
    return [];
  }, [NodeData]);

  return (
    <React.Fragment>
      <TopBar navigation={navigation} />
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
            />
          ))}
        </VStack>
      </ScrollView>
    </React.Fragment>
  );
}

export default NodeScreen;
