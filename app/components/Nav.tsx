"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, useMemo } from "react";
import { navItems } from "../assets/navItems";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname(); // Full pathname including locale
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Remove the locale from the pathname to get the "clean" path
  const cleanPathname = useMemo(() => {
    const localePrefix = `/${locale}`;
    return pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length) || "/"
      : pathname;
  }, [pathname, locale]);

  // Memoize active nav items
  const activeNavItems = useMemo(() => {
    return navItems.map((item) => {
      const normalizedPathname = cleanPathname.replace(/\/$/, ""); // Trim trailing slash
      const normalizedHref = item.href.replace(/\/$/, ""); // Trim trailing slash

      return {
        ...item,
        isActive: normalizedPathname === normalizedHref,
      };
    });
  }, [cleanPathname]);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const path = cleanPathname === "/" ? "" : cleanPathname; // Avoid double slashes
    router.push(`/${newLocale}${path}`);
  };

  return (
    <nav className="relative flex justify-between items-center w-full p-4 shadow-md">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="logo"
        width={70}
        height={70}
        className="h-auto w-auto max-w-[50px] md:max-w-[70px]"
      />

      {/* Desktop Navigation */}
      <div className="hidden sm:flex flex-1 justify-end items-center gap-6">
        {activeNavItems.map((item) => (
          <Link
            key={item.name}
            href={`/${locale + item.href}`}
            className={`${
              item.isActive
                ? "font-bold underline underline-offset-4 decoration-primary"
                : "font-normal"
            } text-lg`}
          >
            {t(item.name)}
          </Link>
        ))}
      </div>

      {/* Language Selector */}
      <select
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        onChange={handleLanguageChange}
        value={locale}
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden flex items-center ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Dropdown Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          {activeNavItems.map((item) => (
            <Link
              key={item.name}
              href={`/${locale + item.href}`}
              className={`block p-4 text-center ${
                item.isActive
                  ? "font-bold underline underline-offset-4 decoration-primary"
                  : "font-normal"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
