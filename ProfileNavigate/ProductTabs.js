import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SingleProductScreen from '../app/Screens/SingleProductScreen';

const ProductTabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator

            initialRouteName="SingleProductScreen"

            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    display: "none"
                }

            }}
        >

          
            <Tab.Screen
                name="SingleProductScreen"
                component={SingleProductScreen}
                options={{ headerShown: false }}

            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ProductTabs;
