
import React, { useState } from "react";
import { MapPin, Search, Users, ListFilter } from "lucide-react";

type FiltersType = {
  keyword: string;
  skills: string[];
  location: string;
  hackathon: string;
};
type Props = {
  skillsOptions: string[];
  locations: string[];
  hackathons: string[];
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
};

export default function Filters({ skillsOptions, locations, hackathons, filters, setFilters }: Props) {
  // Controlled inputs for filter fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof FiltersType
  ) => {
    setFilters({ ...filters, [field]: e.target.value });
  };
  const handleSkills = (s: string) => {
    const arr = filters.skills.includes(s)
      ? filters.skills.filter((sk) => sk !== s)
      : [...filters.skills, s];
    setFilters({ ...filters, skills: arr });
  };
  const handleHackathon = (h: string) => {
    setFilters({ ...filters, hackathon: h });
  };

  return (
    <div className="w-full bg-white px-6 py-4 rounded-2xl shadow flex flex-col sm:flex-row sm:items-end gap-4 mb-7">
      <div className="flex-1">
        <label className="text-sm font-medium flex items-center mb-1">
          <Search size={16} className="mr-1" /> Search Name
        </label>
        <input
          type="text"
          placeholder="Enter name or keyword..."
          className="w-full border rounded px-3 py-2"
          value={filters.keyword}
          onChange={(e) => handleChange(e, "keyword")}
        />
      </div>
      <div className="flex-1 min-w-[140px]">
        <label className="text-sm font-medium flex items-center mb-1">
          <Users size={16} className="mr-1" /> Skills
        </label>
        <div className="flex flex-wrap gap-2">
          {skillsOptions.map((skill) => (
            <button
              key={skill}
              type="button"
              className={`px-2.5 py-1 rounded-full border text-xs ${
                filters.skills.includes(skill)
                  ? "bg-violet-500 text-white border-violet-500"
                  : "bg-violet-100 text-violet-600 border-transparent"
              } transition`}
              onClick={() => handleSkills(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 min-w-[140px]">
        <label className="text-sm font-medium flex items-center mb-1">
          <MapPin size={16} className="mr-1" /> Location
        </label>
        <select
          className="w-full border rounded px-3 py-2"
          value={filters.location}
          onChange={(e) => handleChange(e, "location")}
        >
          <option value="">Any</option>
          {locations.map((loc) => (
            <option value={loc} key={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 min-w-[140px]">
        <label className="text-sm font-medium flex items-center mb-1">
          <ListFilter size={16} className="mr-1" /> Hackathon
        </label>
        <select
          className="w-full border rounded px-3 py-2"
          value={filters.hackathon}
          onChange={(e) => handleChange(e, "hackathon")}
        >
          <option value="">Any</option>
          {hackathons.map((hack) => (
            <option value={hack} key={hack}>
              {hack}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
