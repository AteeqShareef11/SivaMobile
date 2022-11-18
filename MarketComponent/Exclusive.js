import { Box, HStack, Text, View } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { StyleSheet} from 'react-native';

const Exclusive = () => {
    return (
        <View marginBottom={150} w={"full"}>
            <Box w="90%" mx="auto">
            <ImageBackground borderRadius={15} resizeMode='cover' source={require("../assets/exclusive.png")}
                    style={{
                        width: "100%",
                        height: 250,
                        justifyContent: "flex-end"
                    }}
                >
                    <HStack roundedBottom={"2xl"} w="100%" p="2" alignItems={"center"} space="2" style={{
                        backgroundColor:"rgba(255,255,255,0.3)"
                    }}>
                        <Text py={"4"} color="white">$50 Amazon Gift Card</Text>
                    </HStack>
                </ImageBackground>
            </Box>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Exclusive;
