import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="(tabs)" options={{ title: "Dashboard", drawerLabel: "Dashboard" }} />
        <Drawer.Screen name="announcements" options={{ title: "Announcements", drawerLabel: "Announcements" }} />
        <Drawer.Screen name="about" options={{ title: "About", drawerLabel: "About" }} />
        <Drawer.Screen name="help" options={{ title: "Help & Support", drawerLabel: "Help & Support" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}