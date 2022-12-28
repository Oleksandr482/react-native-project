import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./screens/Home/Home";
import { LoginScreen } from "./screens/AuthScreens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./screens/AuthScreens/RegistrationScreen/RegistrationScreen";

const AuthStack = createStackNavigator();

export const useRoute = () => {
  return (
    <AuthStack.Navigator initialRouteName={"Login"}>
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
};
