import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Routes from "../../Utility/Routes";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode, toggleDarkMode } from "../Redux/newSlice";
import ImgUpload from "./ImgUpload";
import LocationTrack from "./LocationTrack";
import ContactList from "../ContactList";
export default function Home({ navigation }) {
  const dispatch = useDispatch();

  // Get the isDarkMode state from Redux store
  const isDarkMode = useSelector((state) => state.system.isDarkMode);

  // Function to handle the notification button press
  const handleNotificationPress = () => {
    navigation.navigate(Routes.Profile);
  };

  // Function to toggle dark mode
  const toggleDarkModeHandler = () => {
    // Dispatch the toggleDarkMode action
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 18,
          backgroundColor: isDarkMode ? "black" : "lightgray", // Toggle background color based on dark mode
        }}
      >
        {/* Title */}
        <Text
          style={{
            fontSize: 16,
            marginTop: 5,
            color: isDarkMode ? "white" : "black",
          }}
        >
          Task App
        </Text>

        {/* Dark Mode Toggle */}
        <TouchableOpacity onPress={toggleDarkModeHandler}>
          <Ionicons
            name={isDarkMode ? "md-sunny" : "md-moon"}
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity onPress={handleNotificationPress}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>

      {/* Your Home Content */}
      <ScrollView
        style={{ padding: 20, backgroundColor: isDarkMode ? "black" : "white" }}
      ></ScrollView>
    </View>
  );
}
