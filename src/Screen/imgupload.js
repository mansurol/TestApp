import React, { useState, useEffect } from "react";
import { View, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function imgupload() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.error("ImagePicker Error: ", error);
    }
  };

  const uploadImage = () => {
    // Here, you can implement your logic to upload the selected image to a server or storage
    // For example, you might use fetch to send the image to an API endpoint
    if (selectedImage) {
      // Implement your upload logic here
      console.log("Uploading image:", selectedImage);
    } else {
      alert("Please select an image first");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Upload Image" onPress={uploadImage} />
    </View>
  );
}
