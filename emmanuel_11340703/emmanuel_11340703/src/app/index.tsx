import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Campus Connect</Text>
      <Button title="Get Started" onPress={() => router.push("/(drawer)")} />
    </View>
  );
}