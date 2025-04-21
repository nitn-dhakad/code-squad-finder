
import React, { useState, useMemo } from "react";
import { AppSidebarProvider } from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import Filters from "@/components/Filters";
import ConnectModal from "@/components/ConnectModal";
import { demoProfiles, Profile } from "@/data/demoProfiles";
import { useModal } from "@/hooks/useModal";

type FiltersType = {
  keyword: string;
  skills: string[];
  location: string;
  hackathon: string;
};

const allSkills = Array.from(new Set(demoProfiles.flatMap((p) => p.skills))).sort();
const allLocations = Array.from(new Set(demoProfiles.map((p) => p.location))).sort();
const allHackathons = Array.from(new Set(demoProfiles.flatMap((p) => p.hackathons))).sort();

const Index = () => {
  const [filters, setFilters] = useState<FiltersType>({
    keyword: "",
    skills: [],
    location: "",
    hackathon: "",
  });

  const [connectTarget, setConnectTarget] = useState<Profile | null>(null);
  const modal = useModal();

  const filtered = useMemo(() => {
    return demoProfiles.filter((p) => {
      // Name/keyword
      if (
        filters.keyword &&
        !`${p.name} ${p.bio}`.toLowerCase().includes(filters.keyword.toLowerCase())
      )
        return false;
      // Skills (all selected)
      if (filters.skills.length && !filters.skills.every((s) => p.skills.includes(s)))
        return false;
      // Location
      if (filters.location && p.location !== filters.location) return false;
      // Hackathon
      if (filters.hackathon && !p.hackathons.includes(filters.hackathon)) return false;
      return true;
    });
  }, [filters]);

  const handleConnect = (profile: Profile) => {
    setConnectTarget(profile);
    modal.onOpen();
  };

  return (
    <AppSidebarProvider>
      <div className="flex flex-col items-center w-full bg-gray-50 min-h-screen border-l">
        <div className="max-w-5xl w-full pt-10 pb-14 px-4 mx-auto">
          <h1 className="text-4xl font-extrabold text-violet-700 pb-2 mb-2">Find Your Hackathon Squad ⚡️</h1>
          <p className="text-gray-700 text-lg mb-6">Search for teammates by skills, location, or hackathon! Connect and team up for your next competition.</p>
          <Filters
            skillsOptions={allSkills}
            locations={allLocations}
            hackathons={allHackathons}
            filters={filters}
            setFilters={setFilters}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-2 justify-items-center">
            {filtered.length
              ? filtered.map((p) => (
                  <ProfileCard key={p.id} profile={p} onConnect={handleConnect} />
                ))
              : (
                <div className="col-span-full text-center text-gray-500 text-lg py-20">
                  No matching profiles found. Try adjusting your filters!
                </div>
              )}
          </div>
        </div>
        <ConnectModal open={modal.open} onClose={modal.onClose} target={connectTarget} />
      </div>
    </AppSidebarProvider>
  );
};

export default Index;
