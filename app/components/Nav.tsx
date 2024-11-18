import Link from "next/link";
import React from "react";
import { navItems } from "../assets/navItems";

const Nav = () => {
  return (
    <div className="flex justify-between items-center w-full p-[20px] shadow shadow-m">
      <img src="../logo.png" alt="logo" width={70} height={70} />
      <div className="flex flex-1 justify-end items-center gap-[20px] ">
        {navItems.map((item) => 
          <Link key={item.name} href={item.href} className={`${item.isActive ? "font-bold underline underline-offset-4 decoration-primary": "font-normal"} text-xl`} >{item.name}</Link>
        )}
        {/* <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/contact">Contact Us</Link> */}
      </div>
    </div>
  );
};

export default Nav;
