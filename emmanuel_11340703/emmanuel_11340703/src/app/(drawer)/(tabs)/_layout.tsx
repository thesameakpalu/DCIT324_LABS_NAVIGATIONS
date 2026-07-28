import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="courses" options={{ title: "Courses" }} />
      <Tabs.Screen name="timetable" options={{ title: "Timetable" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}