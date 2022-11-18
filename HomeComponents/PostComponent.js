import { Box, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { StyleSheet} from 'react-native';
import PostImg from "../assets/postImg.png";

const PostComponent = ({postData}) => {
    return (
        <VStack space={4}>
        {postData.map((item, index) => (
          <VStack
            key={index}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <ImageBackground
              source={PostImg}
              resizeMode="cover"
              style={{
                height: 250,
                width: 360,
                position: "relative",
                top: 0,
                left: 0,
              }}
            >
              <HStack
                alignItems={"center"}
                justifyContent="space-between"
                p="4"
              >
                <HStack alignItems="center" space="4">
                  <Image source={require("../assets/pp1.png")} style={{
                    width:60,
                    height:60,
                  }} />
                  <VStack>
                    <Text color={"white"}>{item.name}</Text>
                    <Text color="#808080">{item.postTime}</Text>
                  </VStack>
                </HStack>
                <Box
                  w="10"
                  h="10"
                  justifyContent={"center"}
                  alignItems="center"
                  rounded={"xl"}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <Image source={require("../assets/more-circle.png")} style={{
                    width:20,
                    height:20,
                  }} />
                </Box>
              </HStack>
            </ImageBackground>
            <VStack
              roundedBottom={"md"}
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <HStack
                px="4"
                py="2"
                roundedBottom={"md"}
                alignItems={"center"}
                justifyContent="space-between"
              >
                <HStack alignItems={"center"} space="4">
                  <HStack
                    alignItems={"center"}
                    space="1"
                    p="2"
                    rounded="md"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  >
                    <Image source={require("../assets/heart.png")} style={{
                      width:28,
                      height:25,
                    }} />
                    <Text color="white">{item.likes}</Text>
                  </HStack>
                  <HStack alignItems={"center"} space="1" p="1" rounded="md">
                    <Image source={require("../assets/message.png")} style={{
                      width:25,
                      height:25,
                    }} />
                    <Text color="white">{item.comments}</Text>
                  </HStack>
                  <HStack alignItems={"center"} space="1" p="1" rounded="md">
                    <Image source={require("../assets/export.png")} style={{
                      width:30,
                      height:30,
                    }} />
                    <Text color="white">{item.share}</Text>
                  </HStack>
                </HStack>
                <HStack alignItems={"center"} space="6">
                  <Image source={require("../assets/coin.png")}  style={{
                      width:25,
                      height:25,
                    }} />
                  <Image source={require("../assets/archive.png")}  style={{
                      width:25,
                      height:30      ,
                    }}/>
                </HStack>
              </HStack>
              <Text color="white" p="4" fontSize={20}>
                {item.desc}
              </Text>
              <HStack p="4" justifyContent={"flex-start"}>
                <Text
                  bg="#00205F"
                  color="white"
                  rounded={"full"}
                  px="8"
                  py="2"
                >
                  {item.tags}
                </Text>
              </HStack>
            </VStack>
          </VStack>
        ))}
      </VStack>
    );
}

const styles = StyleSheet.create({})

export default PostComponent;
