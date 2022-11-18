import { HStack, Text, View, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import {StyleSheet} from 'react-native';
import { postComDataShop } from '../utils/data';

const PostCom = () => {
    return (
        <View w="full">
            <VStack w="90%" rounded={"lg"} mx="auto" space={"4"} style={{
                backgroundColor: "rgba(255,255,255,0.3)"
            }}>
                <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode='cover' source={postComDataShop.image}
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
                        <Text color="white">{postComDataShop.price}</Text>
                    </HStack>
                </ImageBackground>
               <HStack p="4" alignItems={"center"} justifyContent="space-between" style={{
            
               }}>
                <Text color={"white"}>Landscape photo set</Text>
                <HStack rounded={"lg"} space={"2"} p="2" style={{
                    backgroundColor:"rgba(255,255,255,0.2)"
                }} >
                <Image source={require("../assets/heart.png")} style={{
                      width:28,
                      height:25,
                    }}/>
                <Text color={"white"}>{postComDataShop.likes}</Text>
                </HStack>
               </HStack>
            
            </VStack>
        </View>
    );
}



export default PostCom;
