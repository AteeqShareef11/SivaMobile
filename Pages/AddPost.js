import { VStack } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../Common/Header";
import AddPostCom from "../PostComponents/AddPostCom";
import { Divider } from "native-base";
import AddPostData from "./../PostComponents/AddPostData";
import { ScrollView } from "react-native";

const headerData = {
  title: "Add Your Post",
  leftIcon: require("../assets/close-square.png"),
  rightIcon: require("../assets/send-2.png"),
};

const AddPost = () => {
  return (
    <VStack alignItems={"center"} space="4">
      <Header headerData={headerData} />
      <View style={{
        width:"100%",
        height:710,
      }}>
        <ScrollView>
          <VStack space={"4"}>
            <AddPostCom />
            <Divider w="90%" mx="auto" />
            <AddPostData />
          </VStack>
        </ScrollView>
      </View>
    </VStack>
  );
};

const styles = StyleSheet.create({});

export default AddPost;
