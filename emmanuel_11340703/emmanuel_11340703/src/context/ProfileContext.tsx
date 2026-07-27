import { createContext, useContext, useState, ReactNode } from "react";

type Profile = {
  name: string;
  bio: string;
  programme: string;
};

type ProfileContextType = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>({
    name: "Emmanuel",
    bio: "Computer Science student at UG.",
    programme: "BSc. Computer Science",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used inside a ProfileProvider");
  }
  return context;
}