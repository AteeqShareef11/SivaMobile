import { LinearGradient } from 'expo-linear-gradient';
import { Box } from 'native-base';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import OnBording from './../../Pages/OnBording';

const OnBordingScreen = () => {
    return (
        <Box>
        <LinearGradient
          // Background Linear Gradient
          colors={["#B75B83", "#AA4B74", "#00205F"]}
          start={[0, 0]}
          end={[1, 1]}
          location={[-0.0272, -0.0272, 0.73]}
        >
         <OnBording/>
        </LinearGradient>
      </Box>
    );
}

const styles = StyleSheet.create({})

export default OnBordingScreen;
