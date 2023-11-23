import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Routes from "../../../Utility/Routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyAPRFyxIwb3vsVZ5ukPsm6t2QnR_QAS13c",
  authDomain: "app-test-847ea.firebaseapp.com",
  projectId: "app-test-847ea",
  storageBucket: "app-test-847ea.appspot.com",
  messagingSenderId: "730229129319",
  appId: "1:730229129319:web:8c4ebbfd0bcf1fa7f554c2",
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    return () => {
      // Cleanup Firebase app instance on unmount, if needed
      // app.delete();
    };
  }, []); // Initialize Firebase only once

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        email: email,
      };
      console.log("userData", userData);
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        console.log("Login data stored in AsyncStorage");
      } catch (error) {
        console.error("Error storing login data:", error);
      }

      console.log(" logged in:", userCredential.user);
      navigation.navigate(Routes.bottomtab);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text
          style={{ marginTop: 40, color: "gray", justifyContent: "center" }}
        >
          <Text>
            create a new account?
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.SIGNUP)}
            >
              <Text style={{ color: "green" }}>SignUp</Text>
            </TouchableOpacity>
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
