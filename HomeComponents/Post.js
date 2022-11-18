import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import PostComponent from './PostComponent';
import Profile1 from "../assets/profile1.png";



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
  {
    profileImg: Profile1,
    name: "Samantha Groves",
    postTime: "9 hour ago",
    postImg: "postImg2",
    likes: "4k",
    comments: "254",
    share: "643",
    desc: "You can't stop whats comming and neither can i,but we have opertunity to undersand things",
    tags: "#London",

  }
  , {
    profileImg: Profile1,
    name: "Samantha Groves",
    postTime: "9 hour ago",
    postImg: "postImg2",
    likes: "4k",
    comments: "254",
    share: "643",
    desc: "You can't stop whats comming and neither can i,but we have opertunity to undersand things",
    tags: "#London",

  }
]

const Post = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 710,
      }}
    >
      <ScrollView>
        <PostComponent postData={postData} />
      </ScrollView>
    </View>
  );
};

export default Post;
