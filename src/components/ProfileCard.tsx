
import React from "react";
import { Profile } from "@/data/demoProfiles";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  profile: Profile;
  onConnect: (profile: Profile) => void;
};

export default function ProfileCard({ profile, onConnect }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center max-w-xs w-full hover:shadow-lg transition">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-violet-200 mb-3"
      />
      <div className="font-bold text-lg text-gray-900">{profile.name}</div>
      <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
        <MapPin size={16} className="mr-1 text-violet-500" />
        {profile.location}
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {profile.hackathons.map((h) => (
          <span
            key={h}
            className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium"
          >
            {h}
          </span>
        ))}
      </div>
      <div className="text-gray-600 text-sm mb-4 text-center line-clamp-3">{profile.bio}</div>
      <Button className="w-full bg-violet-500 hover:bg-violet-600" onClick={() => onConnect(profile)}>
        Connect
      </Button>
    </div>
  );
}
