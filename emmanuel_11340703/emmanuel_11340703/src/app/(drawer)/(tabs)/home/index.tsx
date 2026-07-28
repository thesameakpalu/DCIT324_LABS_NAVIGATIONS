import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const events = [
  { id: "1", title: "Freshers' Night", date: "Aug 5, 2026" },
  { id: "2", title: "Career Fair", date: "Aug 12, 2026" },
  { id: "3", title: "Sports Gala", date: "Aug 20, 2026" },
];

export default function Feed() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Campus Feed</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ paddingVertical: 12, borderBottomWidth: 1, borderColor: "#ccc" }}
            onPress={() =>
              router.push({
                pathname: "/(drawer)/(tabs)/home/[id]",
                params: { id: item.id, title: item.title, date: item.date },
              })
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}