
export type Profile = {
  id: string;
  name: string;
  avatar?: string; // optional placeholder
  skills: string[];
  location: string; // city/country or "Online"
  hackathons: string[];
  bio: string;
};

export const demoProfiles: Profile[] = [
  {
    id: "1",
    name: "Alice Zheng",
    avatar: "/placeholder.svg",
    skills: ["Frontend", "React", "UI/UX"],
    location: "New York, USA",
    hackathons: ["HackNYC 2024", "Online Web3 Jam"],
    bio: "Frontend wizard passionate about beautiful UIs!",
  },
  {
    id: "2",
    name: "Marco Rossi",
    avatar: "/placeholder.svg",
    skills: ["Backend", "Node.js", "Databases"],
    location: "Rome, Italy",
    hackathons: ["EU HackFest", "Online Web2 Challenge"],
    bio: "Love scaling products. Let's hack together!",
  },
  {
    id: "3",
    name: "Priya Menon",
    avatar: "/placeholder.svg",
    skills: ["Design", "Branding", "HTML/CSS"],
    location: "Online",
    hackathons: ["Designathon", "Online Web2 Challenge"],
    bio: "Design thinker & product lover, remote hackathons preferred.",
  },
  {
    id: "4",
    name: "Ben Li",
    avatar: "/placeholder.svg",
    skills: ["Fullstack", "Typescript", "API"],
    location: "Toronto, Canada",
    hackathons: ["Hack the North"],
    bio: "Fullstack dev, Typescript enthusiast, looking for backend teammates.",
  },
  {
    id: "5",
    name: "Fatima Al-Farsi",
    avatar: "/placeholder.svg",
    skills: ["Product", "Marketing"],
    location: "Dubai, UAE",
    hackathons: ["Dubai Hack", "Online Web2 Challenge"],
    bio: "Product manager & ML hobbyist, ready to join global jams!",
  },
];
