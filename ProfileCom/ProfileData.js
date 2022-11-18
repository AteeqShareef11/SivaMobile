import { Box, Button, Divider, Text, View, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { HStack } from 'native-base';
import {useNavigation} from "@react-navigation/native"


const ProfileData = () => {
    const navigation = useNavigation()

    return (
        <View  w={"full"}>
            <Box w="90%" mx="auto">
                <VStack space="4">
                    <VStack space="2" alignItems={"center"}>
                        <Image source={require("../assets/profileimg.png")} style={{
                            width: 130,
                            height: 130,
                        }} />
                        <Text color={"white"} fontWeight="bold" fontSize={26}>John Reese</Text>
                        <Text color={"white"} fontSize={16}>London UK</Text>

                    </VStack>
                    <HStack w="full" alignItems={"center"} justifyContent="space-evenly">
                        <Button w="48%" rounded={"md"} bg="white" onPress={()=>navigation.navigate("ShopScreen")} leftIcon={<Image source={require("../assets/buy-crypto.png")} style={{
                            width: 20,
                            height: 20,
                        }} />} >
                            <Text fontWeight={"extrabold"} color="#002EA9">Buy</Text>
                        </Button>
                        <Button w="48%" rounded={"md"} leftIcon={<Image source={require("../assets/user-square.png")} style={{
                            width: 20,
                            height: 20,
                        }} />} style={{
                            backgroundColor: "rgba(255,255,255,0.5)"
                        }}>
                            <Text fontWeight={"bold"} color="white">Follow</Text>
                        </Button>
                    </HStack>
                    <Text textAlign={"center"} color={"white"} opacity={80}>Post + illustrator + visual storyteller</Text>
                    <VStack
                        rounded={"md"}
                        alignItems={"center"}
                        space="4"
                        p="4"
                        style={{
                            backgroundColor: "rgba(183,91,131,0.3)",
                        }}
                    >
                        <HStack w="full" alignItems="center" justifyContent={"space-between"} >
                            <VStack space={"2"} alignItems={"center"} justifyContent="center" >
                                <Text color="white" fontWeight={"bold"}>3</Text>
                                <Text color={"white"} opacity="50">Holders</Text>
                            </VStack>
                            <Divider orientation="vertical" />
                            <VStack space={"2"} alignItems={"center"} justifyContent="center" >
                                <Text color="white" fontWeight={"bold"}>2</Text>
                                <Text color={"white"} opacity="50">Holding</Text>
                            </VStack>
                            <Divider orientation="vertical" />
                            <VStack space={"2"} alignItems={"center"} justifyContent="center" >
                                <Text color="white" fontWeight={"bold"}>$0.40</Text>
                                <Text color={"white"} opacity="50">Coin Price</Text>
                            </VStack>
                        </HStack>
                        <Divider />
                        <HStack w="full" alignItems="center" justifyContent={"space-between"} >
                            <VStack space={"2"} alignItems={"center"} justifyContent="center" >
                                <Text color="white" fontWeight={"bold"}>3</Text>
                                <Text color={"white"} opacity="50">Holders</Text>
                            </VStack>
                            <Divider orientation="vertical" />
                            <VStack space={"2"} alignItems={"center"} justifyContent="center" >
                                <Text color="white" fontWeight={"bold"}>2</Text>
                                <Text color={"white"} opacity="50">Holding</Text>
                            </VStack>
                            <Divider orientation="vertical" />
                            <VStack space={"2"} alignItems={"center"} justifyContent="center" >
                                <Text color="white" fontWeight={"bold"}>$0.40</Text>
                                <Text color={"white"} opacity="50">Coin Price</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                    <HStack rounded={"lg"} p="2" alignItems={"center"} justifyContent="space-between" style={{
                        backgroundColor: "rgba(255,255,255,0.3)"
                    }}>
                        <HStack space={"2"} alignItems="center">
                            <HStack>
                                <Image source={require("../assets/m1.png")} style={{
                                    width: 30,
                                    height: 30,
                                    zIndex: 0,
                                }} />
                                <Image source={require("../assets/m2.png")} style={{
                                    width: 30,
                                    height: 30,
                                    zIndex: 1,
                                    marginLeft: -15
                                }} />
                                <Image source={require("../assets/m3.png")} style={{
                                    width: 30,
                                    height: 30,
                                    zIndex: 1,
                                    marginLeft: -15
                                }} />




                            </HStack>
                            <Text color="white">15 Products</Text>
                        </HStack>
                        <Button bg={"white"}><Text fontWeight={"extrabold"} color={"#00205F"}>View Shop</Text></Button>
                    </HStack>
                    <HStack w="full" alignItems={"center"} justifyContent="space-evenly" p="1" rounded={"lg"} style={{
                        backgroundColor:"rgba(0,32,95,0.5)"
                    }}>
                        <Button w="48%" rounded={"md"} bg="white" leftIcon={<Image source={require("../assets/solana-(sol).png")} style={{
                            width: 20,
                            height: 20,
                        }} />} >
                        </Button>
                        <Button w="48%" rounded={"md"} leftIcon={<Image source={require("../assets/gallery.png")} style={{
                            width: 20,
                            height: 20,
                        }} />} style={{
                            backgroundColor: "transparent"
                        }}>
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileData;
