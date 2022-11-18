import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = ({ headerData }) => {
    const navigation = useNavigation();
    return (
        <Box w="90%" mx="auto">
            <HStack
                marginTop={"10"}
                w="full"
                justifyContent={"space-between"}
                alignItems="center"
            >
                <HStack space={"4"} alignItems="center">
                  <TouchableOpacity  onPress={() => navigation.goBack()}>
                  <Box
                        w="10"
                        h="10"
                        justifyContent={"center"}
                        alignItems="center"
                        rounded={"lg"}
                        style={{
                            backgroundColor: `${headerData.leftIcon === "" ? "transparent" : "rgba(255,255,255,0.2)"}    `,
                        }}
                    >
                        <Image source={headerData.leftIcon} style={{
                            width: 30,
                            height: 30,
                        }} />
                    </Box>
                  </TouchableOpacity>
                    <HStack alignItems={"center"} space="2">
                        <Image source={headerData.profileimg} style={{
                            width: 70,
                            height: 70,
                        }} />
                        <Text fontSize={"18"} color={"white"} fontWeight="bold">
                            {headerData.title}
                        </Text>
                    </HStack>
                </HStack>

                <Box
                    w="10"
                    h="10"
                    justifyContent={"center"}
                    alignItems="center"
                    rounded={"lg"}
                    style={{

                        backgroundColor: `${headerData.rightIcon === "" ? "transparent" : "rgba(255,255,255,0.2)"}    `,
                    }}
                >
                    <Image source={headerData.rightIcon} style={{
                        width: 30,
                        height: 30,
                    }} />
                </Box>
            </HStack>
        </Box>
    );
}

const styles = StyleSheet.create({})

export default ProfileHeader;
