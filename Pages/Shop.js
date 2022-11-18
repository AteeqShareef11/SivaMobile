import { Box, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';
import ProfileHeader from '../ProfileCom/ProfileHeader';
import DigitalDownloads from '../ShopComponents/DigitalDownloads';
import PostCom from '../ShopComponents/PostCom';

const headerData = {
    title: "John Reese",
    leftIcon: require("../assets/arrow-square-left.png"),
    rightIcon: require("../assets/export.png"),
    profileimg:require("../assets/profileimg.png")
}



const Shop = () => {
    return (
        <VStack alignItems={"center"} space="4">
        <ProfileHeader headerData={headerData} />
        <Box style={{
            width: "100%",
            height: 710,
        }}>
            <ScrollView>
                <VStack space="4">
                   <PostCom />
                   <Text fontWeight={"bold"} width="90%" mx={"auto"} color="white">Digital Downloads</Text>
                    <DigitalDownloads/>
                </VStack>
            </ScrollView> 
        </Box>
    </VStack>
    );
}

const styles = StyleSheet.create({})

export default Shop;
