import { LinearGradient } from 'expo-linear-gradient';
import { Box } from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';
import Market from './../../Pages/Market';

const MarketScreen = () => {
    return (
        <Box>
        <LinearGradient
          // Background Linear Gradient
          colors={["#B75B83", "#AA4B74", "#00205F"]}
          start={[0, 0]}
          end={[1, 1]}
          location={[-0.0272, -0.0272, 0.73]}
        >
          <Market/>
       

        </LinearGradient>
      </Box>
    );
}

const styles = StyleSheet.create({})

export default MarketScreen;
