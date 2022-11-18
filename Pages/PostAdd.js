import { Box, VStack, HStack, Text, Button } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Header from './../Common/Header';
import PostAddComp from './../PostAddComp/PostAddComp';

const headerData = {
    title: "Connect",
    leftIcon: require("../assets/arrow-square-left.png"),
    rightIcon: "",
}
const postAddCompData = [
    {
        image: require("../assets/pp1.png"),
        name: "Harold Finch"
    },
    {
        image: require("../assets/pp2.png"),
        name: "Samantha Groves"
    },
    {
        image: require("../assets/pp3.png"),
        name: "Sameen Shaw"
    },
    {
        image: require("../assets/pp4.png"),
        name: "Zoe Morgan"
    },
]

const PostAdd = () => {
    return (
        <VStack alignItems={"center"} space="4">
            <Header headerData={headerData} />
            <Box style={{
                width: "100%",
                height: 750,
            }} >
                <ScrollView>
                    <VStack w="90%" mx="auto" space={"4"}>
                        <HStack mt="4" rounded={"lg"} p="4" w="full" justifyContent={"space-between"} alignItems="center" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>
                            <HStack alignItems={"center"} space="2">
                                <Image source={require("../assets/profileimg.png")} style={{
                                    width: 60,
                                    height: 60,
                                }} />
                                <VStack>
                                    <Text color="white">Invite a friend,</Text>
                                    <Text color="white">get 5 SIVI Coins</Text>
                                </VStack>
                            </HStack>
                            <Button rounded={"lg"} bg="white"><Text color={"#00205F"}>Get 5 Now</Text></Button>
                        </HStack>
                        <Text marginBottom={-2} color={"white"}>Top Suggestions</Text>
                        <Box w="100%" justifyContent={"space-between"} flexDirection={"row"} flexWrap="wrap">
                            {
                                postAddCompData.map((item, index) => (
                                    <Box marginTop={2} w="49%" key={index}>
                                        <PostAddComp postAddCompData={item} />

                                    </Box>
                                ))
                            }
                        </Box>
                        <Text color={"white"}>Aweosome Creators</Text>
                        <VStack marginBottom={200} space={"4"}>
                            <HStack rounded={"lg"} w={"100%"} justifyContent="space-between" alignItems={"center"} p="4" style={{
                                backgroundColor: "rgba(255,255,255,0.1)"
                            }}>
                                <HStack alignItems={"center"} space={"2"}>
                                    <Image source={require("../assets/followP1.png")} style={{
                                        width: 50,
                                        height: 50,
                                    }} />
                                    <Text fontSize={12} color="white">Phillip Lubin</Text>
                                </HStack>
                                <Button rounded={"lg"} px={6} fontWeight="bold" bg={"white"}><Text color="#00205F">Follow</Text></Button>
                            </HStack>

                            <HStack rounded={"lg"} w={"100%"} justifyContent="space-between" alignItems={"center"} p="4" style={{
                                backgroundColor: "rgba(255,255,255,0.3)",


                            }}>
                                <HStack alignItems={"center"} space={"2"}>
                                    <Image source={require("../assets/followP2.png")} style={{
                                        width: 50,
                                        height: 50,
                                    }} />
                                    <Text fontSize={12} color="white">Patia Baptista</Text>
                                </HStack>
                                <Button borderColor={"white"} borderWidth={1} rounded={"lg"} px={4} fontWeight="bold" style={{
                                    backgroundColor: "rgba(255,255,255,0.5)"
                                }} ><Text color="white">Following</Text></Button>
                            </HStack>
                        </VStack>


                    </VStack>
                </ScrollView>
            </Box>
        </VStack>
    );
}

const styles = StyleSheet.create({})

export default PostAdd;
