import { HStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import {View, StyleSheet} from 'react-native';

const OnBordingHeader = () => {
    return (
      <HStack alignItems={"center"}>
      <Image  source={require("../assets/bordingHead.png")} style={{
        width:150,
        height:120,
      }} />
      </HStack>
    );
}

const styles = StyleSheet.create({})

export default OnBordingHeader;
