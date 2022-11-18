import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, HStack, Input, Text, View, VStack } from "native-base";

const AddPostData = () => {
  return (
    <View w={"100%"}>
      <Box w="90%" mx="auto" rounded={"lg"}>
        <VStack space={"2"}>
          <HStack
            w="full"
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Input
              width={"70%"}
              variant="unstyled"
              fontSize={16}
              fontWeight="light"
              placeholderTextColor={"white"}
              placeholder="Add or select a Hashtag"
            />

            <Text rounded="lg" bg="#00205F" color={"white"} py="2" px="4">
              #London
            </Text>
          </HStack>
          <HStack
            w="full"
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Input
              width={"50%"}
              variant="unstyled"
              fontSize={16}
              fontWeight="light"
              placeholderTextColor={"white"}
              placeholder="Add Location"
            />

            <Text color={"white"}>london United Kingdom</Text>
          </HStack>
          <HStack
            w="full"
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Input
              width={"70%"}
              variant="unstyled"
              fontSize={16}
              fontWeight="light"
              placeholderTextColor={"white"}
              placeholder="Chose a reaction"
            />

            <Image
              source={require("../assets/smilen.png")}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </HStack>
          <HStack
            w="full"
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Input
              width={"70%"}
              variant="unstyled"
              fontSize={16}
              fontWeight="light"
              placeholderTextColor={"white"}
              placeholder="Coin hoders only post"
            />

            <Image
              source={require("../assets/change.png")}
              style={{
                width: 60,
                height: 40,
              }}
            />
          </HStack>
          <HStack w="100%" space="1" >
          <HStack
          w="33%"
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
   
         <Text color="white">Tier 01</Text>
            <Image
              source={require("../assets/tick-square.png")}
            />
          </HStack>
          <HStack
          w="32%"
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
   
         <Text color="white">Tier 02</Text>
            <Image
              source={require("../assets/tick-squareoutline.png")}
            />
          </HStack>
          <HStack
          width={"32%"}
            justifyContent={"space-between"}
            p="2"
            alignItems={"center"}
            rounded="lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
   
         <Text color="white">Tier 03</Text>
            <Image
              source={require("../assets/tick-squareoutline.png")}
            />
          </HStack>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddPostData;
