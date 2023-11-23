import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screen/AuthScreen/Login";
import Routes from "../../Utility/Routes";
import SignUp from "../Screen/AuthScreen/SignUp";
import Home from "../Screen/Home";
import OnboardingScreen from "../Screen/OnboardingScreen";
import Notification from "../Screen/Notification";
import Profile from "../Screen/Profile";
import imgupload from "../Screen/imgupload";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.ONBOARDING}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SIGNUP}
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.Notification} component={Notification} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
      <Stack.Screen name={Routes.Imgupload} component={imgupload} />
    </Stack.Navigator>
  );
}
