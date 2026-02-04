import { apiFetch } from "@/lib/api-proxy"
import { User } from "./types"

export const registerUser = (data: {
  name: string
  email: string
  password: string
  role: "STUDENT" | "TUTOR"
}) =>
  apiFetch<User>("/api/auth/register", {  // ✅ add /api
    method: "POST",
    json: data, // use json instead of body, apiFetch handles JSON.stringify
  })

export const loginUser = (data: { email: string; password: string }) =>
  apiFetch<User>("/api/auth/login", {  // ✅ add /api
    method: "POST",
    json: data,
  })

export const getCurrentUser = () =>
  apiFetch<User>("/api/auth/me")  // ✅ add /api

export const logoutUser = () =>
  apiFetch("/api/auth/logout", { method: "POST" }) // ✅ add /api
