import { Stack } from "expo-router";
import { ProfileProvider } from "../context/ProfileContext";

export default function RootLayout() {
  return (
    <ProfileProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="edit-profile" options={{ headerShown: true, title: "Edit Profile" }} />
        <Stack.Screen name="(drawer)" />
      </Stack>
    </ProfileProvider>
  );
}