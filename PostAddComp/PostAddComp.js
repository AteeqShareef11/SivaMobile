import { Divider, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';

const PostAddComp = ({postAddCompData}) => {

    return (
        <VStack w="100%" mx={"auto"}>
            <VStack rounded={"lg"} space={"2"} p="2"  alignItems={"center"} w="full" style={{
                backgroundColor: "rgba(0,32,95,0.4)"
            }}>
                <Image source={postAddCompData.image} style={{
                    width: 60,
                    height: 60,
                    marginTop:20,
                }} />
                <Text color={"white"} fontWeight="bold" >{postAddCompData.name}</Text>

                <VStack rounded={"xl"} w="full" space={"2"} alignItems="center" p="2" style={{
                    backgroundColor: "rgba(255,255,255,0.1)"
                }} >
                    <HStack w="full" justifyContent={"space-between"} alignItems="center">
                        <Text fontSize={8} color={"white"}>Coin Price</Text>
                        <Text fontSize={8} color={"white"} fontWeight={900}  >$ 0.56</Text>
                    </HStack>
                    <Divider />
                    <HStack w="full" justifyContent={"space-between"} alignItems="center">
                        <Text fontSize={8} color={"white"}>Supporters</Text>
                        <Text fontSize={8} color={"white"} fontWeight={900}  >258</Text>
                    </HStack>
                </VStack>
            </VStack>


        </VStack>
    );
}

const styles = StyleSheet.create({})

export default PostAddComp;
