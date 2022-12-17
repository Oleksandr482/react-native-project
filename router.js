import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostsScreen } from "./screens/PostsScreen/PostsScreen";
import { CreatePostScreen } from "./screens/CreatePostScreen/CreatePostScreen";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import { Home } from "./screens/Home/Home";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./screens/RegistrationScreen/RegistrationScreen";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

const AuthStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <HomeTabs.Navigator>
      <HomeTabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 100,
                  backgroundColor: focused ? "#FF6C00" : "#ffffff",
                }}
              >
                <Ionicons
                  name="ios-grid-outline"
                  size={size}
                  color={focused ? "#ffffff" : "#bdbdbd"}
                />
              </View>
            );
          },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <HomeTabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: focused ? "#FF6C00" : "#ffffff",
              }}
            >
              <Ionicons
                name="ios-add"
                size={size}
                color={focused ? "#ffffff" : "#bdbdbd"}
              />
            </View>
          ),
        }}
        name="Create"
        component={CreatePostScreen}
      />
      <HomeTabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 100,
                backgroundColor: focused ? "#FF6C00" : "#ffffff",
              }}
            >
              <Feather
                name="user"
                size={size}
                color={focused ? "#ffffff" : "#bdbdbd"}
              />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </HomeTabs.Navigator>
  );
};
