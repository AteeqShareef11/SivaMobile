import { Box, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { VStack } from 'native-base';
import { HStack } from 'native-base';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const ProductDetail = () => {

    const navigation = useNavigation();

    return (
        <View marginBottom={200} w="90%" mx="auto">
            <VStack space={"4"}>
                <Text color={"white"} fontWeight="bold">
                    Landscape photo set
                </Text>
                <Text color={"white"} >
                    In literature, abstract imagery is language that portrays sensations or experiences that have no physical parallel, such as ideas, concepts, or emotions
                </Text>
                <Text color={"white"}>
                    In literature, abstract imagery is language that portrays sensations or experiences that have no physical parallel, such as ideas, concepts, or emotions

                </Text>

                <VStack space={"2"}>
                    <Text color={"white"} fontWeight="bold">
                        Additional info
                    </Text>
                    <HStack width={"full"} justifyContent="space-between">
                        <Text rounded={"lg"} w="70%" fontWeight={"bold"} color={"white"} p="4" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>High quality</Text>
                        <Text rounded={"lg"} w="28%" fontWeight={"bold"} color={"white"} p="4" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>4k</Text>
                    </HStack>
                    <HStack width={"full"} justifyContent="space-between">
                        <Text rounded={"lg"} w="70%" fontWeight={"bold"} color={"white"} p="4" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>High quality</Text>
                        <Text rounded={"lg"} w="28%" fontWeight={"bold"} color={"white"} p="4" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>4k</Text>
                    </HStack>
                </VStack>
                <Text color={"white"} fontWeight="bold">Extras</Text>
                <VStack space={"2"}>

                    <HStack width={"full"} justifyContent="space-between">
                        <Text rounded={"lg"} w="70%" fontWeight={"bold"} color={"white"} p="4" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>Hard cover book</Text>
                        <Text rounded={"lg"} w="28%" fontWeight={"bold"} color={"white"} p="4" style={{
                            backgroundColor: "rgba(255,255,255,0.2)"
                        }}>$120</Text>
                    </HStack>
                    <HStack width={"full"} justifyContent="space-between">
                        <HStack rounded={"lg"} w="70%" justifyContent={"space-between"} borderWidth="1" borderColor="white" p="4">
                            <Text fontWeight={"bold"} color={"white"} style={{
                            }}>Soft cover book</Text>
                            {/* <Image source={require("../assets/tick-square.png")} /> */}
                        </HStack>
                        <Text rounded={"lg"} w="28%" fontWeight={"bold"} color={"white"} borderWidth="1" borderColor="white" p="4" style={{
                        }}>$90</Text>
                    </HStack>
                </VStack>

                <TouchableOpacity onPress={() => navigation.navigate("BuyCoin")}>
                    <HStack p="2" rounded={"lg"} alignItems={"center"} justifyContent={"space-between"} style={{
                        backgroundColor: "rgba(255,255,255,0.5)",


                    }}>
                        <LinearGradient

                            colors={["#B75B83", "#AA4B74", "#00205F"]}
                            start={[0, 0]}
                            end={[1, 1]}
                            location={[-0.0272, -0.0272, 0.73]}
                            style={{
                                width: 60,
                                height: 60,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "white",

                            }}>


                            <Image source={require("../assets/arrow-circle-right.png")} style={{
                                width: 30,
                                height: 30,
                            }} />
                        </LinearGradient>
                        <HStack space={"2"} alignItems="center">
                            <Image source={require("../assets/productB.png")} style={{
                                width: 30,
                                height: 10
                            }} />
                            <Text fontSize={12} color={"white"}>
                                Swipe to buy $RISI Coin
                            </Text>
                        </HStack>
                        <Box style={{

                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: 60,
                            height: 60,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: "white",


                        }}></Box>

                    </HStack>
                </TouchableOpacity>

            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductDetail;
