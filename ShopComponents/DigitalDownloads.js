import { View, HStack, Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import DigitalPostCom from '../Common/DigitalPostCom';

const digitalPostData = [
    {
        image: require("../assets/dis9.png"),
        price:"$150"
    },
    {
        image: require("../assets/dis7.png"),
        price:"$150"
    },
    {
        image: require("../assets/dis14.png"),
        price:"$150"
    },
    {
        image: require("../assets/dis12.png"),
        price:"$150"
    },
]

const DigitalDownloads = () => {
    return (
        <View marginBottom={200} w={"90%"} mx="auto" >
            <VStack space={"2"}>
                <Box w="100%"  justifyContent={"space-between"} flexDirection={"row"} flexWrap="wrap">
                    {
                        digitalPostData.map((item,index)=>(
                            <Box marginTop={4} rounded={"lg"} w="48%" key={index} style={{
                                backgroundColor:"rgba(255,255,255,0.4)"
                            }}>
                            <DigitalPostCom digitalPostComData={item}/>

                            </Box>
                        ))
                    }
                </Box>
            </VStack>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DigitalDownloads;
