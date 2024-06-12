"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";
import {
  X,
  GitHub,
  LinkedIn,
  WbSunny,
  AccountCircle,
} from "@mui/icons-material";
import { Avatar } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export default function NavHeader() {
  const pathName = usePathname();

  return (
    <Navbar>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarBrand>
        <Avatar fallback={<AccountCircle />} size="sm" src="/evo.jpg" />
      </NavbarBrand>
      <NavbarContent className="sm: hidden md:flex" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className={clsx({ "text-orange-400": pathName === item.href })}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LinkedIn fontSize="small" />
        </NavbarItem>
        <NavbarItem>
          <GitHub fontSize="small" />
        </NavbarItem>
        <NavbarItem>
          <X fontSize="small" />
        </NavbarItem>
        <Button isIconOnly size="sm">
          <WbSunny fontSize="small" />
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
