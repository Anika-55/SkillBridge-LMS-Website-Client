"use client"

import * as React from "react"
import {
  BookOpen,
  CalendarCheck,
  User,
  Users,
  Layers,
  Settings2,
  LifeBuoy,
  MessageSquare,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface AppSidebarProps {
  role: "STUDENT" | "TUTOR" | "ADMIN"
}

export function AppSidebar({
  role,
  ...props
}: AppSidebarProps & React.ComponentProps<typeof Sidebar>) {
  /* ================= ROLE-BASED NAVIGATION ================= */

  const navMainMap = {
    STUDENT: [
      { title: "Dashboard", url: "/dashboard", icon: BookOpen },
      { title: "My Bookings", url: "/dashboard/bookings", icon: CalendarCheck },
      { title: "My Reviews", url: "/dashboard/reviews", icon: MessageSquare },
      { title: "Profile", url: "/dashboard/profile", icon: User },
    ],
    TUTOR: [
      { title: "Dashboard", url: "/dashboard", icon: BookOpen },
      { title: "Tutor Profile", url: "/dashboard/profile", icon: User },
      { title: "Availability", url: "/dashboard/availability", icon: CalendarCheck },
      { title: "My Sessions", url: "/dashboard/sessions", icon: Layers },
      { title: "Student Reviews", url: "/dashboard/reviews", icon: MessageSquare },
    ],
    ADMIN: [
      { title: "Dashboard", url: "/dashboard", icon: BookOpen },
      { title: "Manage Users", url: "/dashboard/users", icon: Users },
      { title: "All Bookings", url: "/dashboard/bookings", icon: CalendarCheck },
      { title: "Categories", url: "/dashboard/categories", icon: Layers },
      { title: "Platform Settings", url: "/dashboard/settings", icon: Settings2 },
    ],
  }

  const navSecondary = [
    { title: "Support", url: "/support", icon: LifeBuoy },
    { title: "Feedback", url: "/feedback", icon: MessageSquare },
  ]

  /* ================= USER DATA (HOOK TO API LATER) ================= */

  const user = {
    name: "Loading...",
    email: "loading@skillbridge.com",
    avatar: "/avatars/default.png",
  }

  return (
    <Sidebar
      collapsible="icon"   // 🔥 Desktop stays visible, collapses to icons
      className="border-r h-[calc(100vh-var(--header-height))] mt-6"
      {...props}
    >
      {/* HEADER / LOGO */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BookOpen className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">SkillBridge</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {role} Panel
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* MAIN NAVIGATION */}
      <SidebarContent>
        <NavMain items={navMainMap[role]} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* USER FOOTER */}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
