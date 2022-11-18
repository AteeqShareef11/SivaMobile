import { View, HStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';
import { Image } from 'react-native';
import { VStack } from 'native-base';

const discoverImages = [
    {
        image:require("../assets/addpostimgn.png")
    },
    {
        image:require("../assets/dis2.png")
    },
    {
        image:require("../assets/dis3.png")
    },
    {
        image:require("../assets/dis4.png")
    },
    {
        image:require("../assets/diss5.png")
    },
    {
        image:require("../assets/dis6.png")
    },
    {
        image:require("../assets/dis7.png")
    },
    {
        image:require("../assets/dis8.png")
    },
    {
        image:require("../assets/dis9.png")
    },
    {
        image:require("../assets/dis10.png")
    },
    {
        image:require("../assets/dis11.png")
    },
    {
        image:require("../assets/dis12.png")
    },
    {
        image:require("../assets/dis13.png")
    },
    {
        image:require("../assets/dis14.png")
    },
    {
        image:require("../assets/dis15.png")
    },
    {
        image:require("../assets/dis16.png")
    },
    {
        image:require("../assets/dis17.png")
    },
    {
        image:require("../assets/dis18.png")
    },
    {
        image:require("../assets/dis2.png")
    },
    {
        image:require("../assets/dis3.png")
    },
    {
        image:require("../assets/dis4.png")
    },
    {
        image:require("../assets/diss5.png")
    },
    {
        image:require("../assets/dis6.png")
    },
    {
        image:require("../assets/dis7.png")
    },
    {
        image:require("../assets/dis8.png")
    },
    {
        image:require("../assets/dis9.png")
    },
    {
        image:require("../assets/dis18.png")
    },
    {
        image:require("../assets/dis2.png")
    },
    {
        image:require("../assets/dis3.png")
    },
    {
        image:require("../assets/dis8.png")
    },
]


const DiscoverImages = () => {
    return (
        <View w="100%">
            <VStack w="90%" mx="auto" >
               <HStack  w={"100%"}  flexDirection="row" flexWrap={"wrap"} justifyContent="space-between" alignItems="center">
               {
                discoverImages.map((item,index)=>(
                    <Image source={item.image} key={index} style={{
                        width:103,
                        height:105,
                        marginTop:7
                    }}/>
                ))
            }
                </HStack>
            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DiscoverImages;
