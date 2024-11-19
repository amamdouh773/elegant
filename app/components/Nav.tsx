'use client'
import Link from "next/link";
import React from "react";
import { navItems } from "../assets/navItems";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  navItems.filter(item=>item.href === pathName ? item.isActive = true : item.isActive = false)
  return (
    <div className="flex justify-between items-center w-full p-[20px] shadow shadow-m">
      <Image src= "/logo.png" alt="logo" width={70} height={70} />
      <div className="flex flex-1 justify-end items-center gap-[20px] ">
        {navItems.map((item) => 
          <Link key={item.name} href={item.href} className={`${item.isActive ? "font-bold underline underline-offset-4 decoration-primary": "font-normal"} text-xl`} >{item.name}</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
