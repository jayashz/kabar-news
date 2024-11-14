import "../global.css";
import React from "react";
import { Stack, Redirect } from "expo-router";
import { useState, useEffect } from "react";

const AuthLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status here
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Add your auth check logic here
      // const token = await AsyncStorage.getItem('userToken');
      // setIsLoggedIn(!!token);
      setIsLoading(false);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // Or return a loading spinner
  }

  return (
    <>
      {/* Redirect to Public route when logged in */}
      {isLoggedIn && <Redirect href="/(Public)" />}
      
      <Stack 
        screenOptions={{ 
          headerShown: false 
        }}
        // Set initial route to Public
        initialRouteName="(Public)"
      >
        <Stack.Screen 
          name="index" 
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="BoardingScreen"
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="(auth)"
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="(Public)"
          options={{
            gestureEnabled: false
          }}
        />
      </Stack>
    </>
  );
};

const _layout = () => {
  return <AuthLayout />;
};

export default _layout;