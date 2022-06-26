import React, { useMemo } from "react";
import { ScrollView, Heading, Center, VStack } from "native-base";

import Card from "../../components/Card";
import TopBar from "../../components/TopBar";
import { useLocationQuery } from "../../reduxStore/Locations";

function LocationScreen({ navigation }) {
  const { LocationData } = useLocationQuery();

  const data = useMemo(() => {
    if (Array.isArray(LocationData?.locations)) {
      return LocationData?.locations;
    }
    return [];
  }, [LocationData]);

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
