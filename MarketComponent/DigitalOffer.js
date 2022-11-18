import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Text, View } from 'native-base';
import { VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import DigitalPostCom from '../Common/DigitalPostCom';

const digitalPostComData =  {
        image:require("../assets/dis9.png"),
        price:"20 SIVI"
    }
    const digitalPostComData2 =  {
        image:require("../assets/dis7.png"),
        price:"20 SIVI"
    }
    


const DigitalOffer = () => {
    return (
        <View w="full">
            <HStack w="full" space={"2"} width="90%" mx="auto" flexDirection={"row"} justifyContent="space-between">
                <VStack rounded={"lg"} w="48%" style={{
                    backgroundColor:"rgba(255,255,255,0.3)"
                }}>
                   <DigitalPostCom digitalPostComData={digitalPostComData}/>

                    <VStack space="4" px="4">
                        <HStack space="2" alignItems={"center"}>
                            <HStack>
                             
                                <Image source={require("../assets/m3.png")} style={{
                                    width: 30,
                                    height: 30,
                                    zIndex: 1,
                                }} />
                                <ImageBackground source={require("../assets/m1.png")}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        zIndex: 1,
                                        marginLeft: -15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}

                                >
                                    <View rounded={"full"} style={styles.overlayView} />
                                    <Text color={"white"}>281</Text>
                                </ImageBackground>
                            </HStack>
                            <Text w={"60%"} fontSize={"10"} color="white">Others bought this</Text>
                        </HStack>

                    </VStack>
                </VStack>
                <VStack rounded={"lg"} w="48%" style={{
                    backgroundColor:"rgba(255,255,255,0.3)"
                }}>
                   <DigitalPostCom digitalPostComData={digitalPostComData2}/>

                    <VStack space="4" pb={"2"} px="4">
                        <HStack space="2" alignItems={"center"}>
                            <HStack>
                             
                                <Image source={require("../assets/m3.png")} style={{
                                    width: 30,
                                    height: 30,
                                    zIndex: 1,
                                }} />
                                <ImageBackground source={require("../assets/m1.png")}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        zIndex: 1,
                                        marginLeft: -15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}

                                >
                                    <View rounded={"full"} style={styles.overlayView} />
                                    <Text color={"white"}>281</Text>
                                </ImageBackground>
                            </HStack>
                            <Text w={"60%"} fontSize={"10"} color="white">Others bought this</Text>
                        </HStack>

                    </VStack>
                </VStack>
                
            </HStack>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayView: {
        borderRadius:60,
        width:"100%",
        height:"100%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      },
})

export default DigitalOffer;
