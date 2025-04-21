
import React from "react";
import { AppSidebarProvider } from "@/components/Sidebar";
import { demoProfiles } from "@/data/demoProfiles";
import ProfileCard from "@/components/ProfileCard";
import { useModal } from "@/hooks/useModal";
import ConnectModal from "@/components/ConnectModal";

// We'll just hardcode as "Alice Zheng" for now
const myProfile = demoProfiles[0];

export default function MyProfilePage() {
  const modal = useModal();
  return (
    <AppSidebarProvider>
      <div className="flex flex-col items-center w-full bg-gray-50 min-h-screen border-l">
        <div className="max-w-xl w-full pt-10 pb-14 px-4 mx-auto">
          <h2 className="text-3xl font-bold text-violet-700 pb-2">My Profile</h2>
          <ProfileCard profile={myProfile} onConnect={() => modal.onOpen()} />
        </div>
        <ConnectModal open={modal.open} onClose={modal.onClose} target={myProfile} />
      </div>
    </AppSidebarProvider>
  );
}
