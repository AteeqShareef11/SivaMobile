import { Box, VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import {View, StyleSheet} from 'react-native';
import ProfileHeader from '../ProfileCom/ProfileHeader';
import Product from '../SingleProductCom/Product';
import { useNavigation } from '@react-navigation/native';
import ProductDetail from '../SingleProductCom/ProductDetail';



    const headerData = {
        title: "",
        leftIcon: require("../assets/arrow-square-left.png"),
        rightIcon:"",
        profileimg:"",
    }


const SingleProduct = ({params}) => {
    console.log(params)
    return (
        <VStack alignItems={"center"} space="4">
        <ProfileHeader headerData={headerData} />
        <Box style={{
            width: "100%",
            height: 710,
        }}>
            <ScrollView>
                <VStack space="4">
                <Product params={params} />
                <ProductDetail/>
                   {/* <PostCom postComData={postComData}/>
                   <Text fontWeight={"bold"} width="90%" mx={"auto"} color="white">Digital Downloads</Text>
                    <DigitalDownloads/> */}
                </VStack>
            </ScrollView> 
        </Box>
    </VStack>
    );
}

const styles = StyleSheet.create({})

export default SingleProduct;
