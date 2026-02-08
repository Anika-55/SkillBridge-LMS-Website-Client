"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

export function Navbar({
  className,
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "SkillBridge Logo",
    title: "SkillBridge",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Tutor", url: "/tutors" },
    { title: "Categories", url: "/categories" },
    { title: "Dashboard", url: "/dashboard" },
    // { title: "Pricing", url: "/pricing" },
    // { title: "Blog", url: "/blog" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Register", url: "/register" },
  },
}: NavbarProps) {
  return (
    <section className={cn("py-4 border-b bg-background", className)}>
      <div className="container mx-auto px-4">
        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} alt={logo.alt} className="h-8 w-auto dark:invert" />
              <span className="text-lg font-semibold tracking-tight">
                {logo.title}
              </span>
            </Link>

            {/* Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderDesktopMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="flex  gap-2">
            <ModeToggle/>
            <Button asChild variant="outline" size="sm">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div>
        </nav>

        {/* ================= MOBILE NAV ================= */}
        <div className="flex items-center justify-between lg:hidden">
          <Link href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} alt={logo.alt} className="h-8 w-auto dark:invert" />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href={logo.url} className="flex items-center gap-2">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 w-auto dark:invert"
                    />
                    <span className="font-semibold">{logo.title}</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-6">
                {/* Mobile Menu */}
                <Accordion type="single" collapsible className="w-full">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                {/* Auth Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline">
                    <Link href={auth.login.url}>{auth.login.title}</Link>
                  </Button>
                  <Button asChild>
                    <Link href={auth.signup.url}>{auth.signup.title}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}

/* ================= RENDER HELPERS ================= */

function renderDesktopMenuItem(item: MenuItem) {
  if (item.items?.length) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link
                    href={subItem.url}
                    className="block rounded-md p-3 hover:bg-muted transition-colors"
                  >
                    <div className="text-sm font-medium">{subItem.title}</div>
                    {subItem.description && (
                      <p className="text-sm text-muted-foreground">
                        {subItem.description}
                      </p>
                    )}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url}
          className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function renderMobileMenuItem(item: MenuItem) {
  if (item.items?.length) {
    return (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 pl-4">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {subItem.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <div key={item.title} className="px-1">
      <Link
        href={item.url}
        className="block py-2 text-sm font-medium hover:text-primary transition-colors"
      >
        {item.title}
      </Link>
    </div>
  );
}