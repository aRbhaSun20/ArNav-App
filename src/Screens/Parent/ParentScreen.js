import React, { useMemo } from "react";
import { ScrollView, Heading, Center, VStack } from "native-base";

import Card from "../../components/Card";
import TopBar from "../../components/TopBar";
import { useParentQuery } from "../../reduxStore/Locations";

function ParentScreen({ navigation }) {
  const { ParentData } = useParentQuery();

  const data = useMemo(() => {
    if (Array.isArray(ParentData?.parents)) {
      return ParentData?.parents;
    }
    return [];
  }, [ParentData]);

  return (
    <React.Fragment>
      <TopBar navigation={navigation} />
      <Center>
        <Heading padding="3">Parent Details</Heading>
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
          {data.map((parent, i) => (
            <Card
              key={i}
              imgSrc={parent?.parentImageUrl}
              name={parent.parentName}
              type="Parent"
              userName={parent?.parentUser?.name}
            />
          ))}
        </VStack>
      </ScrollView>
    </React.Fragment>
  );
}

export default ParentScreen;
