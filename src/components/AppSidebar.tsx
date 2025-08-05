"use client";

import { FC } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import NavLink from "./NavLink";
import Link from "next/link";

const AppSidebar: FC = () => {
  const menus: Array<{
    id: number;
    name: string;
    link: string;
    type?: "link" | "button";
  }> = [
    {
      id: 1,
      name: "services",
      link: "/#services",
    },
    {
      id: 2,
      name: "barbers",
      link: "/#barbers",
    },
    {
      id: 3,
      name: "shop",
      link: "/#shop",
    },
    {
      id: 4,
      name: "contact",
      link: "/#contact",
    },
    {
      id: 5,
      name: "book now",
      link: "book-now",
      type: "button",
    },
  ];

  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-[3rem]">
          <SidebarGroupLabel>
            <Link
              href="/"
              className="text-[3.2rem] text-amber-600"
              onClick={toggleSidebar}
            >
              Clippers
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {menus.map((menu) => (
              <SidebarMenuItem key={menu.id} className="list-none">
                <SidebarMenuButton asChild onClick={toggleSidebar}>
                  <Link
                    className="p-[0.8rem_1rem] text-[1.8rem] capitalize text-black"
                    href={menu.link}
                  >
                    {menu.name}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
