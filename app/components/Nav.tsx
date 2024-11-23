"use client";
import Link from "next/link";
import React, { ChangeEvent } from "react";
import { navItems } from "../assets/navItems";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Nav = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    console.log(path); 
    router.push(`/${newLocale}/${path}`);
  };
  navItems.filter((item) =>
    pathname.replace(locale,"").includes(item.href) ? (item.isActive = true) : (item.isActive = false)
  );
  return (
    <div className="flex justify-between items-center w-full p-[20px] shadow shadow-m">
      <Image
        src="/logo.png"
        alt="logo"
        width={70}
        height={70}
        className="h-auto w-auto"
      />
      <div className="flex flex-1 justify-end items-center gap-[20px] ">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={`/${locale + item.href}`}
            className={`${
              item.isActive
                ? "font-bold underline underline-offset-4 decoration-primary"
                : "font-normal"
            } text-xl`}
          >
            {t(item.name)}
          </Link>
        ))}
        <select
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
          onChange={handleLanguageChange}
          value={locale}
        >
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
