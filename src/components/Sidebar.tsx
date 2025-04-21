
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Users, User, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const navItems = [
  {
    title: "Profiles",
    to: "/",
    icon: Users,
  },
  {
    title: "My Profile",
    to: "/my-profile",
    icon: User,
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <ShadSidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold text-lg pt-2">Code Squad Finder</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title} active={location.pathname === item.to}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to} className="flex items-center gap-2">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadSidebar>
  );
}

export function AppSidebarProvider({ children }: { children: React.ReactNode }) {
  // min-h-screen flex for sticky sidebar layout
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
