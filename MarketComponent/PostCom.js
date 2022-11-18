import React from 'react';

import { Box, Text, View, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import { HStack } from 'native-base';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { postComData } from './../utils/data';

const PostCom = () => {
    return (
        <View w="full">
            <VStack w="90%" rounded={"lg"} mx="auto" space={"4"} style={{
                backgroundColor: "rgba(255,255,255,0.3)"
            }}>
                <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode='cover' source={postComData.image}
                    style={{
                        width: "100%",
                        height: 250,
                        justifyContent: "flex-end"
                    }}
                >
                    <HStack rounded={"lg"} marginLeft={5} w="30%" p="2" marginBottom={5} alignItems={"center"} space="2" bg="#00205F">
                        <Image source={require("../assets/coin.png")} style={{
                            width:25,
                            height:25,
                        }} />
                        <Text color="white">{postComData.price}</Text>
                    </HStack>
                </ImageBackground>
                <VStack space="4" p="4">
                    <Text fontWeight={"bold"} color="white">{postComData.title}</Text>
                    <HStack space="2" alignItems={"center"}>
                        <HStack>
                            <Image source={postComData.profileIcon1} style={{
                                width: 60,
                                height: 60,
                                zIndex: 0,
                            }} />
                            <Image source={postComData.profileIcon2} style={{
                                width: 60,
                                height: 60,
                                zIndex: 1,
                                marginLeft: -30
                            }} />
                                <Image source={postComData.profileIcon3} style={{
                                width: 60,
                                height: 60,
                                zIndex: 1,
                                marginLeft: -30
                            }} />
                            <ImageBackground source={postComData.profileIcon4}
                            style={{
                                width: 60,
                                height: 60,
                                zIndex: 1,
                                marginLeft: -30,
                                justifyContent:"center",
                                alignItems:"center",
                            }}

                            >
                             <View rounded={"full"} style={styles.overlayView} />
                               <Text color={"white"}>{postComData.number}</Text>
                            </ImageBackground>
                        </HStack>
                        <Text color="white">{postComData.desc}</Text>
                    </HStack>

                </VStack>

            </VStack>
        </View>
    );
}


export default PostCom;
const styles = StyleSheet.create({
    overlayView: {
      width:60,
      height:60,
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  });