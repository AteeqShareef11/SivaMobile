import { Box, Divider, Text, VStack } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileHeader from '../ProfileCom/ProfileHeader';
import { ScrollView } from 'react-native';
import BuyCoinHeader from './../BuyCoinComp/BuyCoinHeader';
import { HStack } from 'native-base';
import { Image } from 'react-native';
import BuyCoinProfile from './../BuyCoinComp/BuyCoinProfile';
import BuyCoinD from './../BuyCoinComp/BuyCoinD';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BuyCoinF from './../BuyCoinComp/BuyCoinF';


const BuyCoin = () => {
    return (
        <VStack alignItems={"center"} space="4">
            <BuyCoinHeader />
            <Box >
                <ScrollView>
                    <VStack justifyContent={"space-between"} style={{
                width: "100%",
                height: 550,
            }}>
                      <VStack space={"4"}>
                      <BuyCoinProfile />
                        <Divider w="90%" mx="auto" />
                        <BuyCoinD />
                        <Text color={"white"} textAlign="center">$2 transaction free</Text>
                      </VStack>
                        <BuyCoinF/>
                    </VStack>
                </ScrollView>
            </Box>
        </VStack>
    );
}

const styles = StyleSheet.create({})

export default BuyCoin;
