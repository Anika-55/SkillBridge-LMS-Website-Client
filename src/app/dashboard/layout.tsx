import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Await the cookies because it returns a Promise now
  const cookieStore = await cookies();
  
  const role = cookieStore.get("user_role")?.value;

//   if (!role) redirect("/login"); // Not logged in

  return (
    <SidebarProvider className="flex flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <AppSidebar role={role} />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
