import { Text, View, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { HStack } from 'native-base';
import { Box } from 'native-base';

const Product = ({params}) => {
  
  return (
        <View w="90%" mx="auto">
          <VStack space="2" alignItems="center" rounded="lg" style={{
            backgroundColor:"rgba(255,255,255,0.2)"
          }}>
          <Image borderTopLeftRadius={10} borderTopRightRadius={10} resizeMode='cover' source={JSON.stringify(params.image)}
                style={{
                    width: "100%",
                    height: 180,
                   
                }}
             />
             <HStack w="full" p="4" alignItems={"center"} justifyContent="space-between">
                <HStack space={"2"} alignItems="center">
                    <Image source={require("../assets/profileimg.png")} style={{
                        width:50,
                        height:50,
                    }}/>
                    <Text color={"white"} fontWeight={"bold"}>John Reese</Text>
                </HStack>
                <HStack space="2" alignItems={"center"}>
                  <Box alignItems={"center"} justifyContent="center" p="2" rounded={"lg"} style={{
                    backgroundColor:"rgba(255,255,255,0.3)"
                  }}>
                    <Image source={require("../assets/heart.png")} style={{
                      width:28,
                      height:25,
                    }}/>
                  </Box>
                  <Box alignItems={"center"} justifyContent="center" p="1" rounded={"lg"} style={{
                    backgroundColor:"rgba(255,255,255,0.3)",

                  }}>
                    <Image  source={require("../assets/export.png")} 
                        style={{
                            width:30,
                            height:30
                        }}
                    />
                  </Box>
                </HStack>
             </HStack>
          </VStack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Product;
