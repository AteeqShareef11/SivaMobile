import { Box, VStack } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Common/Header';
import ProfileData from '../ProfileCom/ProfileData';
import { ScrollView } from 'react-native';
import Profile1 from "../assets/profile1.png";
import { Divider } from 'native-base';
import Comments from '../ProfileCom/Comments';
import PostComponent from '../HomeComponents/PostComponent';
import ProfileHeader from '../ProfileCom/ProfileHeader';


const headerData = {
    title: "",
    leftIcon: require("../assets/arrow-square-left.png"),
    rightIcon: require("../assets/export.png"),
    profileimg:"",
}
const postData = [
    {
        profileImg: Profile1,
        name: "Harold Finch",
        postTime: "19 hour ago",
        postImg: "postImg",
        likes: "4.2k",
        comments: "25",
        share: "64",
        desc: "You can't stop whats comming and neither can i,but we have opertunity to undersand things",
        tags: "#London",

    },


]

const Profile = () => {
    return (
        <VStack alignItems={"center"} space="4">
            <ProfileHeader headerData={headerData} />
            <Box style={{
                width: "100%",
                height: 710,
            }}>
                <ScrollView>
                    <VStack space="4">
                        <ProfileData />
                        <VStack space={"4"}>
                            <PostComponent postData={postData} />
                            <Divider w="90%" mx="auto" />
                            <Comments />
                        </VStack>
                    </VStack>
                </ScrollView>
            </Box>
        </VStack>
    );
}

const styles = StyleSheet.create({})

export default Profile;
