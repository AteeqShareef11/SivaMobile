import { Text, View, Button } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { HStack } from 'native-base';
import { Input } from 'native-base';

const SignUpComp = () => {
    return (
        <View marginTop={-200} zIndex={30} w={"90%"} mx="auto">
            <VStack alignItems={"center"}>
                <LinearGradient

                    colors={["#465FE6", "#C42ACE"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 20,
                        marginBottom: -30,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,

                        elevation: 24,

                    }}
                >
                    <Image source={require("../assets/logo.png")} style={{
                        width: 100,
                        height: 100,
                    }} />
                </LinearGradient>
                <VStack space={"4"} zIndex={10} rounded={"lg"} px="4" py={10} w="full" alignItems={"center"} style={{
                    backgroundColor: "rgba(255,255,255,0.1)"
                }}>
                    <Text color={"white"} fontWeight="bold" fontSize={"22"}>Sign Up</Text>
                    <HStack rounded={"lg"} w={"full"} p="2" style={{
                        backgroundColor: "rgba(255,255,255,0.2)"
                    }}>
                        <Input
                            width={"100%"}
                            variant="unstyled"
                            fontSize={16}
                            fontWeight="light"
                            placeholderTextColor={"white"}
                            placeholder="First Name"
                            opacity={80}
                        />
                    </HStack>
                    <HStack rounded={"lg"} w={"full"} p="2" style={{
                        backgroundColor: "rgba(255,255,255,0.2)"
                    }}>
                        <Input
                            width={"100%"}
                            variant="unstyled"
                            fontSize={16}
                            fontWeight="light"
                            placeholderTextColor={"white"}
                            placeholder="Last Name"
                            opacity={80}
                        />
                    </HStack>
                    <HStack rounded={"lg"} w={"full"} p="2" style={{
                        backgroundColor: "rgba(255,255,255,0.2)"
                    }}>
                        <Input
                            width={"100%"}
                            variant="unstyled"
                            fontSize={16}
                            fontWeight="light"
                            placeholderTextColor={"white"}
                            placeholder="Email"
                            opacity={80}
                        />
                    </HStack>
                    <HStack rounded={"lg"} w={"full"} p="2" style={{
                        backgroundColor: "rgba(255,255,255,0.2)"
                    }}>
                        <Input
                            width={"100%"}
                            variant="unstyled"
                            fontSize={16}
                            fontWeight="light"
                            placeholderTextColor={"white"}
                            placeholder="Password"
                            opacity={80}
                        />
                    </HStack>
                    <VStack w="full" alignItems={"center"} mt="2" space={"8"}>
                        <Button w="full" bg={"white"}><Text color={"#00205F"} fontWeight="bold">Sign Up</Text></Button>
                        <Text color={"white"} opacity={60} >Already have an account? Log in </Text>
                    </VStack>
                </VStack>
            </VStack>
            <Text mt={30} marginBottom={200} color={"white"} opacity={60} textAlign="center" w={"80%"} mx="auto" >By signing up, I agree to the Siva Privacy Plicy
                and Terms of Services</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    blurView: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})

export default SignUpComp;
