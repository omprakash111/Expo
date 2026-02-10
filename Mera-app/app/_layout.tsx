import { Stack } from 'expo-router';
import React from 'react';

function Rootlayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="about/index" />
    </Stack>
  )
}

export default Rootlayout;