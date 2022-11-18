import { Box, VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import OnBordingHeader from './../OnBordingComp/OnBordingHeader';
import { HStack } from 'native-base';
import { Image } from 'react-native';
import FollowComp from '../OnBordingComp/FollowComp';
import SweatWallet from '../OnBordingComp/SweatWallet';

const OnBording = () => {
    return (
        <VStack alignItems={"center"} >

            <Box style={{
                width: "100%",
                height: 810,
            }}>
                <ScrollView>
                    <VStack space={"4"} alignItems={"center"}>
                        <VStack alignItems={"center"}>
                            <OnBordingHeader />
                            <VStack marginTop={-5}>
                                <HStack w="full" justifyContent={"flex-end"} zIndex={0}>
                                    <Image source={require("../assets/bordingBg.png")} style={{
                                        width: 100,
                                        height: 150,
                                    }} />
                                </HStack>

                                <FollowComp />
                                <HStack w="full" marginTop={-10} justifyContent={"flex-start"} zIndex={0}>
                                    <Image source={require("../assets/bgC.png")} style={{
                                        width: 70,
                                        height: 100,
                                    }} />
                                </HStack>
                            </VStack>
                        </VStack>
                        <SweatWallet />
                    </VStack>
                </ScrollView>
            </Box>
        </VStack>
    );
}


export default OnBording;
