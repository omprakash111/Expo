import { Stack } from 'expo-router';
import React from 'react';

function Rootlayout() {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="about/index" />
    </Stack>
  )
}

export default Rootlayout;