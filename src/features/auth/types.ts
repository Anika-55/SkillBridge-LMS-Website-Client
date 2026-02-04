export type UserRole = "STUDENT" | "TUTOR" | "ADMIN"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  image?: string
}
