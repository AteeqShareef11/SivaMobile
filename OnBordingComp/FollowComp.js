import { Text, View, Button } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import { HStack } from 'native-base';
import { Box } from 'native-base';
import { Image } from 'react-native';

const FollowComp = () => {
    return (
        <View zIndex={10} w={"85%"} mx={"auto"} style={{
            marginTop: -100,
        }}>
            <VStack space={"4"}>
                <HStack w={"100%"} justifyContent="flex-start">
                    <HStack rounded={"lg"} w={"90%"} justifyContent="space-between" alignItems={"center"} p="4" style={{
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
                </HStack>

                <HStack w={"100%"} justifyContent="flex-end">
                    <HStack  rounded={"lg"} w={"90%"} justifyContent="space-between" alignItems={"center"} p="4" style={{
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
                            backgroundColor:"rgba(255,255,255,0.5)"
                        }} ><Text color="white">Following</Text></Button>
                    </HStack>

                </HStack>

                <HStack w={"100%"} justifyContent="flex-start">
                    <HStack rounded={"lg"} w={"90%"} justifyContent="space-between" alignItems={"center"} p="4" style={{
                        backgroundColor: "rgba(255,255,255,0.1)"
                    }}>
                        <HStack alignItems={"center"} space={"2"}>
                            <Image source={require("../assets/followP3.png")} style={{
                                width: 50,
                                height: 50,
                            }} />
                            <Text fontSize={12} color="white">Maria Schleifer</Text>
                        </HStack>
                        <Button rounded={"lg"} px={6} fontWeight="bold" bg={"white"}><Text color="#00205F">Follow</Text></Button>
                    </HStack>
                </HStack>
            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({
    myShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

})

export default FollowComp;
