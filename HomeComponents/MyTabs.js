import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image, View } from "native-base";
import AddPostScreem from "../app/Screens/AddPostScreem";
import DiscoverScreen from "../app/Screens/DiscoverScreen";
import HomeScreen from "../app/Screens/HomeScreen";
import MarketScreen from "../app/Screens/MarketScreen";
import ProfileScreen from "../app/Screens/ProfileScreen";
import ShopScreen from './../app/Screens/ShopScreen';
import ProfileTabs from './../ProfileNavigate/ProfileTabs';
import OnBordingScreen from './../app/Screens/OnBordingScreen';
import SignUpScreen from './../app/Screens/SignUpScreen';
import PostAddScreen from './../app/Screens/PostAddScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 90,
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                alignItems={"center"}
                justifyContent="center"
                bg={focused ? "white" : ""}
                p="4"
                rounded={"lg"}
              >
                <Image
                  source={require("../assets/home-2.png")}
                  alt=""
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? "#00205F" : "#fff",
                    width:20,
                    height:20,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={PostAddScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                alignItems={"center"}
                justifyContent="center"
                bg={focused ? "white" : ""}
                p="4"
                rounded={"lg"}
              >
                <Image
                  source={require("../assets/discover.png")}
                  alt=""
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? "#00205F" : "#fff",
                    width:20,
                    height:20,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AddPost"
          component={AddPostScreem}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                alignItems={"center"}
                justifyContent="center"
                bg={focused ? "white" : ""}
                p="4"
                rounded={"lg"}
              >
                <Image
                  source={require("../assets/add-square.png")}
                  alt=""
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? "#00205F" : "#fff",
                    width:20,
                    height:20,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={MarketScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                alignItems={"center"}
                justifyContent="center"
                bg={focused ? "white" : ""}
                p="4"
                rounded={"lg"}
              >
                <Image
                  source={require("../assets/bag-2.png")}
                  alt=""
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? "#00205F" : "#fff",
                    width:20,
                    height:20,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileTabs}
          
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                alignItems={"center"}
                justifyContent="center"
                bg={focused ? "white" : ""}
                p="4"
                rounded={"lg"}
              >
                <Image
                  source={require("../assets/profile-circle.png")}
                  alt=""
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? "#00205F" : "#fff",
                    width:20,
                    height:20,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
