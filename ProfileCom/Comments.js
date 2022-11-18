import { Box, Divider, Input, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import { HStack } from 'native-base';
import { Image } from 'react-native';

const Comments = () => {
    return (
        <View marginBottom={200} w="90%" mx="auto">
            <VStack space={"4"}>
             <Text color="white" fontWeight="bold" fontSize={20}>All Comments</Text>
                <VStack space={8}>
                    <HStack w="full" space={"6"}>
                        <HStack w="20%">
                            <Image source={require("../assets/m3.png")} style={{
                                width: 70,
                                height: 70,
                            }} />
                        </HStack>

                        <VStack w="75%" space={2} >
                            <HStack w="100%" alignItems={"center"} justifyContent="space-between">
                                <VStack>

                                    <VStack>
                                        <Text fontWeight={"bold"} fontSize="20" color={"white"}>Joss Carter</Text>
                                        <Text opacity={60} color={"white"}>@josscarter</Text>
                                    </VStack>

                                </VStack>
                                <HStack space={"2"} alignItems="center">
                                    <Box justifyContent={"center"} alignItems="center" rounded={"lg"} style={{
                                        backgroundColor: "rgba(255,255,255,0.3)"
                                    }}>
                                        <Image source={require("../assets/arrow-square-down.png")} style={{
                                            width: 30,
                                            height: 30,
                                        }} />
                                    </Box>
                                    <Text opacity={60} color={"white"}>259</Text>
                                    <Box justifyContent={"center"} alignItems="center" rounded={"lg"} style={{
                                        backgroundColor: "rgba(255,255,255,0.3)"
                                    }}>
                                        <Image source={require("../assets/arrow-square-down.png")} style={{
                                            width: 30,
                                            height: 30,
                                        }} />
                                    </Box>
                                </HStack>

                            </HStack>
                            <Text fontSize={12} color={"white"}>In literature, abstract imagery is language that portrays sensations or experiences.</Text>

                        </VStack>
                    </HStack>
                    <HStack w="full" space={"6"}>
                        <HStack w="20%">
                            <Image source={require("../assets/m2.png")} style={{
                                width: 70,
                                height: 70,
                            }} />
                        </HStack>

                        <VStack w="75%" space={2} >
                            <HStack w="100%" alignItems={"center"} justifyContent="space-between">
                                <VStack>

                                    <VStack>
                                        <Text fontWeight={"bold"} fontSize="20" color={"white"}>Anny dom</Text>
                                        <Text opacity={60} color={"white"}>@annydom</Text>
                                    </VStack>

                                </VStack>
                                <HStack space={"2"} alignItems="center">
                                    <Box justifyContent={"center"} alignItems="center" rounded={"lg"} style={{
                                        backgroundColor: "rgba(255,255,255,0.3)"
                                    }}>
                                        <Image source={require("../assets/arrow-square-down.png")} style={{
                                            width: 30,
                                            height: 30,
                                        }} />
                                    </Box>
                                    <Text opacity={60} color={"white"}>259</Text>
                                    <Box justifyContent={"center"} alignItems="center" rounded={"lg"} style={{
                                        backgroundColor: "rgba(255,255,255,0.3)"
                                    }}>
                                        <Image source={require("../assets/arrow-square-down.png")} style={{
                                            width: 30,
                                            height: 30,
                                        }} />
                                    </Box>
                                </HStack>

                            </HStack>
                            <Text fontSize={12} color={"white"}>In literature, abstract imagery is language that portrays sensations or experiences.</Text>

                        </VStack>
                    </HStack>
                </VStack>

                <HStack w={"full"} rounded={"lg"} justifyContent={"space-between"} alignItems="center" p="2" style={{
                    backgroundColor: "rgba(255,255,255,0.2)"
                }}>

                    <HStack w="70%" alignItems={"center"}>
                        <Image source={require("../assets/commentp.png")} alt="" style={{
                            width:40,
                            height:40
                        }}/>
                        <Input
                            variant="unstyled"
                            fontSize={16}
                            fontWeight="light"
                            placeholderTextColor={"white"}
                            placeholder="Add comment"
                        />
                    </HStack>
                    <Image  source={require("../assets/sends.png")} style={{
                        width:30,
                        height:30,
                    }} />
                </HStack>

            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Comments;
