import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name='weather' options={{ headerShown:false }}  />
      <Stack.Screen name='home' options={{ headerShown:false }}  />
    </Stack>
);
}
