import { Box, VStack } from 'native-base';
import React from 'react';
import Post from '../HomeComponents/Post';
import Header from '../Common/Header';



const headerData ={
    title:"SIVA",
    leftIcon:require("../assets/category.png"),
    rightIcon:require("../assets/notification-bing.png"),
}

const Home = () => {
    return (
        <VStack alignItems={"center"} space="4">
            <Header headerData={headerData}/>
            <Post  />

        </VStack>
    );
}


export default Home;
