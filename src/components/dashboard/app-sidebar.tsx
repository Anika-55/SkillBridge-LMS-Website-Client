"use client"
import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Route } from "@/types";
import { adminRoutes } from "@/routes/adminRoutes";
import { userRoutes } from "@/routes/userRoutes";
import { tutorRoutes } from "@/routes/tutorRoutes";
import { Roles } from "@/constants/roles";

export function AppSidebar({
  user,
  ...props
}: {
  user?: { role?: string };
} & React.ComponentProps<typeof Sidebar>) {

  // ✅ Prevent crash during SSR / first render
  if (!user || !user.role) {
    return null; // or <SidebarSkeleton />
  }

  let routes: Route[] = [];

  switch (user.role) {
    case Roles.admin:
      routes = adminRoutes;
      break;
    case Roles.user:
      routes = userRoutes;
      break;
    case Roles.tutor:
      routes = tutorRoutes;
      break;
    default:
      routes = [];
  }

  return (
    <Sidebar {...props}>
      {/* ===== Header ===== */}
    <SidebarHeader>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <Link
          href="/"
          className="flex w-full items-center gap-2"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <GalleryVerticalEnd className="size-4" />
          </div>

          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-medium">SkillBridge</span>
            <span className="text-xs">v1.0.0</span>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarHeader>


      {/* ===== Content ===== */}
      <SidebarContent>
        {routes.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
