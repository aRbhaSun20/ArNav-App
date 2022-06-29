import React, { useMemo, useState } from "react";
import { ScrollView, Heading, Center, VStack } from "native-base";

import Card from "../../components/Card";
import TopBar from "../../components/TopBar";
import { useParentQuery } from "../../reduxStore/Locations";
import { RefreshControl } from "react-native";

function ParentScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const { ParentData, ParentRefetch } = useParentQuery();

  const data = useMemo(() => {
    if (Array.isArray(ParentData?.parents)) {
      return ParentData?.parents;
    }
    return [];
  }, [ParentData]);
  
  const onRefresh = () => {
    setRefreshing(true);
    ParentRefetch().then(() => {
      setRefreshing(false);
    });
  };

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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
