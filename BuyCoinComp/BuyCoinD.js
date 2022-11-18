import { Box, HStack, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';
import { VStack } from 'native-base';

const BuyCoinD = () => {
    return (
        <View w={"full"}>
        <VStack space={"4"} w="90%" mx={"auto"}>
      <HStack w={"100%"} p="4" rounded={"lg"} alignItems="center" justifyContent={"space-between"} style={{
          backgroundColor:"rgba(255,255,255,0.1)"
         }}>
          <VStack  space={"2"}>
          <Text opacity={60}  color={"white"} >Account to Play</Text>

              <Text  color={"white"} fontWeight="bold">USD</Text>
          </VStack>
          <Text  color={"white"}>$100</Text>
         </HStack>
         <HStack w={"100%"} p="4" rounded={"lg"} alignItems="center" justifyContent={"space-between"} style={{
          backgroundColor:"rgba(255,255,255,0.1)"
         }}>
          <VStack  space={"2"}>
          <Text opacity={60}  color={"white"} >Coins your Recieve</Text>

              <Text  color={"white"} fontWeight="bold">$RISI Coin</Text>
          </VStack>
          <Text  color={"white"}>50</Text>
         </HStack>
      </VStack>
    </View>
    );
}

const styles = StyleSheet.create({})

export default BuyCoinD;
