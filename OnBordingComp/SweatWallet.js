import { Button, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';

const SweatWallet = () => {
    return (
        <View marginBottom={200} w={"90%"} mx="auto">
            <VStack rounded={"2xl"} w="full" alignItems={"center"} space="4" style={{
                backgroundColor: "rgba(255,255,255,0.1)"
            }}>
               <VStack alignItems={"center"} p="4" w="80%" mx="auto" space={"4"}>
               <Text textAlign={"center"} color={"white"} fontSize="28" fontWeight={"bold"}>
                    Hey Rishi, Welcome to your Sweat Wallet
                </Text>
                <Text textAlign={"center"} color={"white"} opacity={60}>
                    Grow Your SWEAT and recieve amazing rewards
                </Text>
                <Text textAlign={"center"} color={"white"} opacity={60}>
                Coming soon: NFT games, buy crypto with a bank caard, exchange, Learn to Earn, and more!
                </Text>
                <Button rounded={"lg"} w={"90%"} bg={"white"} ><Text fontWeight={"bold"} color="#00205F">Let's Start</Text></Button>
               </VStack>
            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SweatWallet;
