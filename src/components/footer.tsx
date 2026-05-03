import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "One", href: "/one", },
  { name: "Two", href: "/two", },
  { name: "Three", href: "/three", },
  { name: "Four", href: "/four", },
  { name: "Five", href: "/five", }
];

const company = [
  { name: "One", href: "/one", },
  { name: "Two", href: "/two", },
  { name: "Three", href: "/three", },
  { name: "Four", href: "/four", },
  { name: "Five", href: "/five", }
];

const resources = [
  { name: "One", href: "/one", },
  { name: "Two", href: "/two", },
  { name: "Three", href: "/three", },
  { name: "Four", href: "/four", },
  { name: "Five", href: "/five", }
];

const columns = [
  { title: "Services", links: services },
  { title: "Company", links: company },
  { title: "Resources", links: resources },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <Image
                className="dark:invert"
                src="/globe.svg"
                alt=""
                width={24}
                height={24}
                priority
              />
              <div>Acme.</div>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-black/60 dark:text-white/60">
              Its coming, something is coming, I just don't know what it is yet.
            </p>
            {/* <div className="mt-4 flex gap-3 text-sm text-black/60 dark:text-white/60">
              <a href="#" className="hover:opacity-70 transition-opacity">
                Twitter
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                GitHub
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
            </div> */}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold tracking-tight">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-black/60 dark:text-white/60">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-6 text-sm text-black/60 dark:border-white/10 dark:text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Acme. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              Privacy
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}