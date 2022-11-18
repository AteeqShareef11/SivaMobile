import { LinearGradient } from 'expo-linear-gradient';
import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import Home from '../../Pages/Home';

const HomeScreen = () => {
    return (
        <Box>
          <LinearGradient
            // Background Linear Gradient
            colors={["#B75B83", "#AA4B74", "#00205F"]}
            start={[0, 0]}
            end={[1, 1]}
            location={[-0.0272, -0.0272, 0.73]}
          >
            <Home/>
         
  
          </LinearGradient>
        </Box>
    );
}


export default HomeScreen;
