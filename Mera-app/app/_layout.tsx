import { Stack } from 'expo-router';
import React from 'react';

function Rootlayout() {
  return (
    <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="about/index" />
    </Stack>
  )
}

export default Rootlayout;