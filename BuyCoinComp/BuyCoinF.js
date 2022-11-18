import { LinearGradient } from 'expo-linear-gradient';
import { Box, HStack, Text, View } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const BuyCoinF = () => {
    return (
        <View w="90%" mx={"auto"}>
            <TouchableOpacity>
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
        </View>
    );
}

const styles = StyleSheet.create({})

export default BuyCoinF;
