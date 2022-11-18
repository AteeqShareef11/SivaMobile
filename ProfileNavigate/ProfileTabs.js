import React from 'react';
import {  StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../app/Screens/ProfileScreen';
import ShopScreen from '../app/Screens/ShopScreen';
import SingleProductScreen from './../app/Screens/SingleProductScreen';
import ProductTabs from './ProductTabs';
import BuyCoinScreen from './../app/Screens/BuyCoinScreen';

const Tab = createBottomTabNavigator();

const ProfileTabs = () => {
    return (
        <Tab.Navigator

            initialRouteName="ProfileScreen"

            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    display: "none"
                }

            }}
        >

            <Tab.Screen
                options={{
                    headerShown: false
                }}
                name="ProfileScreen"
                component={ProfileScreen}

            />
            <Tab.Screen
                name="ShopScreen"
                component={ShopScreen}
                options={{ headerShown: false }}

            />
                <Tab.Screen
                name="SingleProduct"
                component={SingleProductScreen}
                options={{ headerShown: false }}

            />
             <Tab.Screen
                name="BuyCoin"
                component={BuyCoinScreen}
                options={{ headerShown: false }}

            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ProfileTabs;
