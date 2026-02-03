"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Label } from "@/components/ui/label"
import { SidebarInput } from "@/components/ui/sidebar"

export function SearchForm(props: React.ComponentProps<"form">) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    // 🔎 Redirect to search page (create this route later)
    router.push(`/dashboard/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>

        <SidebarInput
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search bookings, tutors, sessions..."
          className="h-8 pl-7"
        />

        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 opacity-50" />
      </div>
    </form>
  )
}
