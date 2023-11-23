import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export default function Notification() {
  useEffect(() => {
    registerForPushNotificationsAsync();
    const subscription =
      Notifications.addNotificationReceivedListener(handleNotification);

    return () => {
      subscription.remove();
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to receive notifications was denied!");
      return;
    }

    const projectId = Constants.manifest?.eas?.projectId;

    if (!projectId) {
      console.error("Project ID not found!");
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync({ projectId }))
      .data;
    console.log(token); // This is the push token you'll use for sending notifications.
  };

  const handleNotification = (notification) => {
    console.log(notification);
    // Handle incoming notifications here
    // Update UI or perform actions based on the incoming notification
  };

  const sendPushNotification = async (token) => {
    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: token,
        title: "Hello!",
        body: "This is a test notification.",
      }),
    });
  };

  const onPressSendNotification = async () => {
    const projectId = Constants.manifest?.extra?.projectId;

    if (!projectId) {
      console.error("Project ID not found!");
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync({ projectId }))
      .data;
    await sendPushNotification(token);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notification Screen</Text>
      <Button
        title="Send Test Notification"
        onPress={onPressSendNotification}
      />
    </View>
  );
}
