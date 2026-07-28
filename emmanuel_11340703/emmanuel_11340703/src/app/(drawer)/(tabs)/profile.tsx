import { View, Text, Button } from "react-native";
import { router } from "expo-router";
import { useProfile } from "../../../context/ProfileContext";

export default function Profile() {
  const { profile } = useProfile();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{profile.name}</Text>
      <Text style={{ marginBottom: 8 }}>{profile.bio}</Text>
      <Text style={{ marginBottom: 20 }}>{profile.programme}</Text>
      <Button title="Edit Profile" onPress={() => router.push("/edit-profile")} />
    </View>
  );
}