import { LinearGradient } from 'expo-linear-gradient';
import { Box } from 'native-base';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import BuyCoin from './../../Pages/BuyCoin';

const BuyCoinScreen = () => {
    return (
        <Box>
        <LinearGradient
          // Background Linear Gradient
          colors={["#B75B83", "#AA4B74", "#00205F"]}
          start={[0, 0]}
          end={[1, 1]}
          location={[-0.0272, -0.0272, 0.73]}
        >
         <BuyCoin/>
       

        </LinearGradient>
      </Box>

    
    );
}

const styles = StyleSheet.create({})

export default BuyCoinScreen;
