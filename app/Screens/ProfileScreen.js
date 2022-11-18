import { LinearGradient } from 'expo-linear-gradient';
import { Box, Text } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from '../../Pages/Profile';
import ProfileTabs from '../../ProfileNavigate/ProfileTabs';


const ProfileScreen = () => {
  return (
    <Box>
      <LinearGradient
        // Background Linear Gradient
        colors={["#B75B83", "#AA4B74", "#00205F"]}
        start={[0, 0]}
        end={[1, 1]}
        location={[-0.0272, -0.0272, 0.73]}
      >

          <Profile/>
      </LinearGradient>
    </Box>
  );
}

const styles = StyleSheet.create({})

export default ProfileScreen;
