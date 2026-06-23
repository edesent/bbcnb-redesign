"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, quickLinks, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/church-profile.jpg"
            alt="Bible Baptist Church ASL logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border border-white/20 object-cover"
          />
          <span className="leading-tight">
            <span className="block font-serif text-2xl font-bold text-white">
              Bible Baptist Church
            </span>
            <span className="block text-sm font-medium text-white/70">
              Deaf & Hearing in Seguin, TX
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/service-times"
            className="ml-2 rounded-md bg-red px-4 py-2 text-sm font-bold text-white transition hover:bg-red-deep"
          >
            Plan a Visit
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/20 p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-coal px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 font-semibold text-white/85 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/church-profile.jpg"
              alt=""
              width={52}
              height={52}
              className="rounded-full border border-white/15"
            />
            <div>
              <p className="font-serif text-2xl font-bold">{site.name}</p>
              <p className="text-white/65">{site.fullName}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-white/72">
            An independent Baptist church where Deaf and hearing people can worship,
            learn the Bible, and hear the Gospel together.
          </p>
        </div>

        <div>
          <p className="font-bold text-white">Contact</p>
          <div className="mt-4 space-y-2 text-white/72">
            <p>{site.address}</p>
            <p>Voice/Text: {site.phone}</p>
            <p>Video Phone: {site.videoPhone}</p>
            <p>{site.email}</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-white">Quick Links</p>
          <div className="mt-4 grid gap-2">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-white/72 transition hover:text-white"
                >
                  <Icon size={17} />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
