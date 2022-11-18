import { Box, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';
import { HStack } from 'native-base';
import { Image } from 'react-native';

const BuyCoinProfile = () => {
    return (
      <View w={"full"}>
          <Box w="90%" mx={"auto"}>
        <HStack w={"100%"} p="4" rounded={"lg"} alignItems="center" justifyContent={"space-between"} style={{
            backgroundColor:"rgba(255,255,255,0.2)"
           }}>
            <HStack alignItems={"center"} space={"2"}>
                <Image source={require("../assets/m3.png")} style={{
                 width:50,
                 height:50,
               
                }}/>
                <Text  color={"white"} fontWeight="bold">Grace Handricks</Text>
            </HStack>
            <Text  color={"white"}>%0.40 Coin Price</Text>
           </HStack>
        </Box>
      </View>
    );
}

const styles = StyleSheet.create({})

export default BuyCoinProfile;
