"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
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
  return (
    <nav className="main-nav border-b border-neutral-300 sticky top-0 z-20 bg-white">
      <div className="flex items-center gap-[1.5rem] md:justify-between py-[1.2rem] w-[min(90%,140rem)] mx-auto">
        <SidebarTrigger className="md:hidden" />
        <Link href={"/"} className="text-[2.2rem] ">
          Clippers
        </Link>
        <ul className="nav-list items-center gap-4 hidden md:flex">
          {menus.map((menu) => (
            <li key={menu.id}>
              <NavLink name={menu.name} link={menu.link} type={menu.type} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
