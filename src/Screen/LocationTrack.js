import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";

export default function LocationTracking() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    // Reverse geocoding to get location name
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const { display_name } = data;
        setLocationName(display_name);
      })
      .catch((error) => {
        console.error("Reverse geocoding error:", error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {errorMsg && <Text>{errorMsg}</Text>}
      {locationName ? (
        <View>
          <Text>Location: {locationName}</Text>
        </View>
      ) : (
        <Text>Loading location...</Text>
      )}
      <Button title="Refresh Location" onPress={getLocationAsync} />
    </View>
  );
}
