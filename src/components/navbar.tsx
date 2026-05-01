"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { name: "Web Design", href: "/services" },
  { name: "Web Development", href: "/services" },
  { name: "Graphic Design", href: "/services" }
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
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto px-6">
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
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative inline-block rounded-full px-4 py-2 text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 -z-0 rounded-full bg-black/5 opacity-0 transition-opacity duration-200 hover:opacity-100 dark:bg-white/10" />
                </Link>
              </li>
            ))}
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
            {links.map((link, i) => (
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
                  <span>{link.name}</span>
                  <span className="text-black/30 dark:text-white/30">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}