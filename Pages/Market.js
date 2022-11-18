import { Box, Text, VStack } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DigitalOffer from '../MarketComponent/DigitalOffer';
import GetStarted from '../MarketComponent/GetStarted';
import Header from '../MarketComponent/Header';
import PostCom from '../MarketComponent/PostCom';
import { ScrollView } from 'react-native';
import Exclusive from '../MarketComponent/Exclusive';




const Market = () => {
    return (
        <VStack alignItems={"center"} space="4">
            <Header />
            <Box style={{
                width: "100%",
                height: 710,
            }}>
                <ScrollView>
                    <VStack space={"4"}>
                        <GetStarted />
                        <PostCom  />
                        <Text fontWeight={"bold"} width="90%" mx={"auto"} color="white">Digital Offers</Text>
                        <DigitalOffer />
                        <Text fontWeight={"bold"} width="90%" mx={"auto"} color="white">Exclusive Offers</Text>
                        <Exclusive />
                    </VStack>
                </ScrollView>
            </Box>
        </VStack>
    );
}

const styles = StyleSheet.create({})

export default Market;
