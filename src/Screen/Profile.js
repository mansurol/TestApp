import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData !== null) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Error fetching data from storage:", error);
      }
    };

    fetchDataFromStorage();
  }, []);

  return (
    <View>
      <Text>Profile</Text>
      {userData && (
        <View>
          <Text>Email: {userData.email}</Text>
          {/* Display other user data */}
        </View>
      )}
    </View>
  );
}
