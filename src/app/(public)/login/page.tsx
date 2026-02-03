import { LoginForm } from "@/components/login-form";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";


export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === "ADMIN") redirect("/dashboard/admin");
    if (user.role === "TUTOR") redirect("/dashboard/tutor");
    redirect("/dashboard/student")
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}