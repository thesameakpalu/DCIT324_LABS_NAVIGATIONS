import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function EventDetails() {
  const { id, title, date } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{title}</Text>
      <Text>Date: {date}</Text>
      <Text>Event ID: {id}</Text>
    </View>
  );
}