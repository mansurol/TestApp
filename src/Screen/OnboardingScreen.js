import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Swiper from "react-native-swiper";
import Routes from "../../Utility/Routes";

const OnboardingScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigate to your main app screen after onboarding
    navigation.navigate(Routes.LOGIN);
  };

  return (
    <Swiper style={styles.wrapper} loop={false}>
      <View style={styles.slide}>
        <Text style={styles.text}>Onboarding Screen 1</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Onboarding Screen 2</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Onboarding Screen 3</Text>
        <Button title="Get Started" onPress={handleGetStarted} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
