import { Button, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { View } from 'native-base';
import { Box } from 'native-base';


const GetStarted = () => {
    return (
     <View w="full">
        <Box w="90%" mx="auto" rounded={"lg"}>
        <ImageBackground
            resizeMode="cover"
            borderRadius={10}
            source={require("../assets/bak.png")}
            style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }} >
            <HStack w="full" p="4" alignItems={"center"} justifyContent="space-between">
                <VStack w="65%" space="4">
                    <Text color="white">Use your SIVI coins to buy products and service from our marketplace</Text>
                    <Button w="70%" bg="white"><Text>Get Started</Text></Button>
                </VStack>
                <Image source={require("../assets/marketgetimg.png")} />
            </HStack>

        </ImageBackground>
        </Box>
     </View>
    );
}


export default GetStarted;
