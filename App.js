import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./src/Navigation/StackNav";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";
import BottomTab from "./src/Navigation/BottomTab";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
