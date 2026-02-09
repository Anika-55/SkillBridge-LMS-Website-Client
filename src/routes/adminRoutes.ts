import { Route } from "@/types";

export const adminRoutes: Route[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Students",
        url: "/admin-dashboard/students",
      },
      {
        title: "Tutors",
        url: "/admin-dashboard/tutors",
      },
    ],
  },
]