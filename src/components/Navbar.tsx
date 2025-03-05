"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { AlignRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if  (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) 
      ) {
        setToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

console.log(toggle, "toggle")
  return (
    <div ref={menuRef} className="w-[90%] z-50 md:w-[80%]  border-2 flex md:justify-between md:items-center fixed bg-white mx-[5%] md:mx-[10%] mt-5 py-3 px-8 rounded-xl shadow-lg">
      <Link href="/" className="cursor-pointer">
        <Image
          src={"/images/navlogo.png"}
          alt="logo"
          width={24}
          height={24}
          className="mr-6 "
        />
      </Link>
      <div className="hidden md:flex md:justify-center w-full">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Link href={"/signin"} className="w-full md:w-[25%] flex justify-end">
        <button className="bg-gray-100 font-bold duration-300 hover:bg-gray-500 hover:text-white py-2 px-4 text-xs text-gray-600 rounded-full">
          TRY FOR FREE
        </button>
      </Link>
      <AlignRight width={35} height={35} className="ml-2 cursor-pointer"
      onClick={() => setToggle(!toggle)} />

      {
        toggle && <div className="w-[50%] md:w-[17%] shadow-lg px-5 backdrop-blur-lg border-2 border-gray-100 rounded-lg py-6 gap-2 top-[100%] left-[45%] md:left-[81%] h-auto absolute flex flex-col bg-white">
        <Link
          href={"/"}
          className=" text-center py-2 hover:bg-gray-500 hover:text-white duration-300 font-semibold rounded-lg w-full border-b-2 border-gray-100"
        >
          Home
        </Link>
        <Link href={"/get-started"}
        className="border-b-2 border-gray-100 text-center py-2 hover:bg-gray-500 hover:text-white duration-300 font-semibold rounded-lg w-full">
          Get Started</Link>
        <Link href={"/service"}
        className="border-b-2 text-center py-2 hover:bg-gray-500 hover:text-white duration-300 font-semibold rounded-lg w-full border-gray-100"
        >Service</Link>
        <Link href={"/about"}
        className="border-b-2 text-center py-2 hover:bg-gray-500 hover:text-white duration-300 font-semibold rounded-lg w-full border-gray-100"
        >About</Link>
        <Link href={"/signin"}
        className=" text-center py-2 bg-red-400 hover:bg-red-600 text-white duration-300 font-semibold rounded-lg w-full"
        >Try For Free</Link>
      </div>
      }
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
