import { Box, HStack, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import OnBordingHeader from '../OnBordingComp/OnBordingHeader';
import SignUpComp from './../SignUpComp/SignUpComp';

const SignUp = () => {
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
                            <VStack w="full" marginTop={-5}>
                                <HStack w="full" justifyContent={"flex-end"} zIndex={0}>
                                    <Image source={require("../assets/bordingBg.png")} style={{
                                        width: 100,
                                        height: 150,
                                    }} />
                                </HStack>
                            </VStack>
                        </VStack>
                        <HStack w="80%" justifyContent={"flex-start"} zIndex={0}>
                            <Image source={require("../assets/signUpbg.png")} style={{
                                width: 120,
                                height: 100,
                            }} />
                        </HStack>
                        <SignUpComp/>
                    </VStack>
                </ScrollView>
            </Box>
        </VStack>
    );
}

const styles = StyleSheet.create({})

export default SignUp;
