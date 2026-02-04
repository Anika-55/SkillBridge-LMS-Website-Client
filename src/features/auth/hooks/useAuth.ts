"use client"

import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services"

export function useAuth() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUser,
    retry: false,
  })
}
