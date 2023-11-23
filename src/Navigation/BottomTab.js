import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../Screen/Home";
import imgupload from "../Screen/ImgUpload";
import LocationTracking from "../Screen/LocationTrack";
import ContactList from "../ContactList";
import StackNav from "./StackNav";
import Routes from "../../Utility/Routes";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let IconName;
          if (route.name === Routes.HOME) {
            IconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === Routes.Locationtack) {
            IconName = focused ? "location-sharp" : "location-outline";
          } else if (route.name === Routes.ContactList) {
            IconName = focused
              ? "ios-person-circle-sharp"
              : "ios-person-circle-outline";
          } else if (route.name === Routes.Imgupload) {
            IconName = focused ? "ios-cloud-upload" : "cloud-upload-outline";
          }
          return <Icon name={IconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
      initialRouteName={Routes.HOME}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={Routes.Locationtack} component={LocationTracking} />
      <Tab.Screen name={Routes.ContactList} component={ContactList} />
      <Tab.Screen name={Routes.Imgupload} component={imgupload} />
    </Tab.Navigator>
  );
};

export default BottomTab;
