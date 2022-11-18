import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const DigitalPostCom = ({ digitalPostComData }) => {
    const navigation = useNavigation();

    return (
        <>

            <VStack  >
                <TouchableOpacity onPress={()=>navigation.navigate("SingleProduct",{
                    image:digitalPostComData.image
                })}>
                    <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode='cover' source={digitalPostComData.image}
                        style={{
                            width: "100%",
                            height: 120,
                            justifyContent: "flex-end"
                        }}
                    >
                        <HStack rounded={"lg"} marginLeft={2} w="60%" p="2" marginBottom={2} alignItems={"center"} style={{
                            backgroundColor: "rgba(255,255,255,0.3)",
                            borderRadius: 10

                        }} >
                            <Image source={require("../assets/coin.png")} style={{
                                width:25,
                                height:25,
                            }} />
                            <Text color="white">{digitalPostComData.price}</Text>
                        </HStack>
                    </ImageBackground>
                </TouchableOpacity>
                <Text px="4" py="2" fontWeight={"bold"} color="white">Landscape photo</Text>
            </VStack>


        </>
    );
}

const styles = StyleSheet.create({})

export default DigitalPostCom;
