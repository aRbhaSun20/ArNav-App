import React, { useMemo, useState } from "react";
import { ScrollView, Heading, Center, VStack } from "native-base";

import Card from "../../components/Card";
import TopBar from "../../components/TopBar";
import { useLocationQuery } from "../../reduxStore/Locations";
import { RefreshControl } from "react-native";

function LocationScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const { LocationData, LocationRefetch } = useLocationQuery();

  const data = useMemo(() => {
    if (Array.isArray(LocationData?.locations)) {
      return LocationData?.locations;
    }
    return [];
  }, [LocationData]);

  const onRefresh = () => {
    setRefreshing(true);
    LocationRefetch().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <React.Fragment>
      <TopBar navigation={navigation} />
      <Center>
        <Heading padding="3">Location Details</Heading>
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
          {data.map((location, i) => (
            <Card
              key={i}
              imgSrc={location?.imageUrl}
              name={location?.source?.placeName}
              type="Location"
              userName={location?.user?.name}
              desc={location?.parent?.parentName}
            />
          ))}
        </VStack>
      </ScrollView>
    </React.Fragment>
  );
}

export default LocationScreen;
