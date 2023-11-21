import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screen/AuthScreen/Login";
import Routes from "../../Utility/Routes";
import SignUp from "../Screen/AuthScreen/SignUp";
import Home from "../Screen/Home";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
      <Stack.Screen name={Routes.HOME} component={Home} />
    </Stack.Navigator>
  );
}
