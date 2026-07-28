import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { router } from "expo-router";
import { useProfile } from "../context/ProfileContext";

export default function EditProfile() {
  const { profile, setProfile } = useProfile();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [programme, setProgramme] = useState(profile.programme);

  const handleSave = () => {
    setProfile({ name, bio, programme });
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, borderColor: "#ccc", marginBottom: 12, padding: 8 }}
      />

      <Text>Bio</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        style={{ borderWidth: 1, borderColor: "#ccc", marginBottom: 12, padding: 8 }}
      />

      <Text>Programme</Text>
      <TextInput
        value={programme}
        onChangeText={setProgramme}
        style={{ borderWidth: 1, borderColor: "#ccc", marginBottom: 20, padding: 8 }}
      />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}