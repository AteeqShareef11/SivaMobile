import { Box, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from '../Common/Header';
import DiscoverImages from './../DiscoverComponents/DiscoverImages';
import { ScrollView } from 'react-native';

const headerData = {
    title: "Discover",
    leftIcon: "",
    rightIcon: "",
};


const Discover = () => {
    return (
        <VStack alignItems={"center"} space="4">
            <Header headerData={headerData} />
            <Box style={{
                width: "100%",
                height: 710,
            }}>
                <ScrollView>
                    <DiscoverImages />
                </ScrollView>
            </Box>
        </VStack>
    );
}

const styles = StyleSheet.create({})

export default Discover;
