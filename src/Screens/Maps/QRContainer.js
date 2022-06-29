import { Flex } from 'native-base';
import React from 'react'
import BottomBar from './BottomBar';

const QRContainer = ({ navigation }) => {
    return (
      <Flex height="100%" justifyContent="space-between">
        <Flex>QR</Flex>
        <BottomBar navigation={navigation} />
      </Flex>
    );
  };

export default QRContainer