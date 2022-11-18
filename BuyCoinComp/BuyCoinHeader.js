import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuyCoinHeader = () => {

  const navigation = useNavigation();

    return (
        <Box w="90%" mx="auto">
        <HStack
            marginTop={"10"}
            w="full"
            justifyContent={"space-between"}
            alignItems="center"
        >
            <HStack space={"4"} alignItems="center">
               <TouchableOpacity onPress={() => navigation.goBack()}>
               <Box
                    w="10"
                    h="10"
                    justifyContent={"center"}
                    alignItems="center"
                    rounded={"lg"}
                    style={{
                        backgroundColor: ` "rgba(255,255,255,0.2)"`,
                    }}
                >
                    <Image source={require("../assets/arrow-square-left.png")} style={{
                        width: 30,
                        height: 30,
                    }} />
                </Box>
               </TouchableOpacity>
                <HStack alignItems={"center"} space="2">
                    <Image source={require("../assets/profileimg.png")} style={{
                        width: 60,
                        height: 60,
                    }} />
                    <Text fontSize={"12"} color={"white"} fontWeight="bold">
                        Get John Reese
                    </Text>
                </HStack>
            </HStack>

            <Box
          w="70"
          h="10"
          p="2"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems="center"
          rounded={"lg"}
          style={{

            backgroundColor: `"rgba(255,255,255,0.2)"}`,
          }}
        >
          <Image source={require("../assets/wallet-3.png")} style={{
            width:20,
            height:20,
          }} />
          <Text fontSize={8} color={"white"}>$432.92</Text>
        </Box>
        </HStack>
    </Box>
    );
}

const styles = StyleSheet.create({})

export default BuyCoinHeader;
