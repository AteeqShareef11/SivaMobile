import React from "react";
import { View, Box, VStack, Text, HStack } from "native-base";
import {
  Image,
  ImageBackground,
  StyleSheet,
  ViewComponent,
} from "react-native";

const AddPostCom = () => {
  return (
    <View w={"full"}>
      <Box
        w="90%"
        mx="auto"
        rounded={"lg"}
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      >
        <VStack space="1" px="4" pt="4">
          <Text  color="white">
            In literature, abstract imagery is language that portrays sensations
            or experiences that have no physical parallel, such as ideas,
            concepts, or emotions.
          </Text>
          <HStack >
            <ImageBackground
              resizeMode="cover"
              source={require("../assets/addpostimgn.png")}
              style={{
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View rounded={"lg"} style={styles.overlayView} />
              <Image
                source={require("../assets/close-circlen.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </ImageBackground>
          </HStack>
          <HStack p="2" justifyContent={"flex-end"}>
            <Text fontSize={20} fontWeight={"bold"} color={"white"}>
              90
            </Text>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};

export default AddPostCom;
const styles = StyleSheet.create({
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
