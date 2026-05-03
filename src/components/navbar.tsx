"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tally1, Tally2, Tally3, Tally4, Tally5 } from "lucide-react";

const links = [
  { name: "One", href: "/one", icon: Tally1 },
  { name: "Two", href: "/two", icon: Tally2 },
  { name: "Three", href: "/three", icon: Tally3 },
  { name: "Four", href: "/four", icon: Tally4 },
  { name: "Five", href: "/five", icon: Tally5 }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/60"
          : "border-b border-black/10 bg-transparent"
      }`}
    >
      <nav className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2 font-semibold tracking-tight"
          >
            <Image
              className="dark:invert transition-transform duration-300 group-hover:rotate-12"
              src="/globe.svg"
              alt=""
              width={24}
              height={24}
              priority
            />
            <span>
              Acme<span className="text-black/40 dark:text-white/40">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                  >
                    <Icon className="relative z-10 h-4 w-4" strokeWidth={2} />
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 -z-0 rounded-full bg-black/5 opacity-0 transition-opacity duration-200 hover:opacity-100 dark:bg-white/10" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-50 -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 md:hidden touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 block h-[2px] w-full bg-black transition-all duration-300 dark:bg-white ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-black transition-opacity duration-300 dark:bg-white ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-full bg-black transition-all duration-300 dark:bg-white ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            open ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <li
                  key={link.name}
                  className={`transform transition-all duration-300 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-base text-black/80 transition-colors hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-black/50 dark:text-white/50" strokeWidth={2} />
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}