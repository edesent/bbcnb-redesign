import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Mail,
  MapPin,
  Phone,
  Video,
} from "lucide-react";
import { Footer, Header } from "@/components/SiteShell";
import { highlights, pages, quickLinks, services, site } from "@/content/site";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: site.fullName,
  url: "https://bbcnb.us",
  image: "https://bbcnb.us/pastor-family.jpg",
  email: site.email,
  telephone: "+1-512-757-5017",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1456 East Kingsbury St",
    addressLocality: "Seguin",
    addressRegion: "TX",
    postalCode: "78155",
    addressCountry: "US",
  },
  sameAs: [site.facebook],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,31,43,0.35),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(215,168,74,0.22),transparent_26%),linear-gradient(135deg,#151316_0%,#242025_58%,#3a1116_100%)]" />
          <div className="relative mx-auto grid min-h-[calc(100svh-140px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="min-w-0 max-w-[calc(100vw-2rem)]">
              <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white/85">
                <Video size={17} />
                Voiced and signed services
              </div>
              <h1 className="mt-7 max-w-4xl font-serif text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
                <span className="block">A place for the</span>
                <span className="block">Deaf and hearing</span>
                <span className="block">to worship</span>
                <span className="block">together.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/76">
                Bible Baptist Church is a community of real people serving a real God
                in Seguin, Texas. Come for reverent Bible preaching, Christ-centered
                worship, and a church family where accessibility matters.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/service-times"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red px-6 py-4 font-bold text-white transition hover:bg-red-deep"
                >
                  Plan a Visit
                  <ArrowRight size={19} />
                </Link>
                <a
                  href={site.map}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
                >
                  <MapPin size={19} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="relative min-w-0 max-w-[calc(100vw-2rem)]">
              <div className="rounded-md border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <Image
                  src="/pastor-family.jpg"
                  alt="Pastor Steve Parker, Mrs. Sabrina, and family"
                  width={630}
                  height={630}
                  priority
                  className="aspect-square w-full rounded-md object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-md bg-paper p-5 text-ink shadow-xl">
                <p className="font-bold">Pastor Steve Parker, Mrs. Sabrina, and family</p>
                <p className="mt-1 text-muted">Welcoming Deaf and hearing families in Seguin.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-4 py-14 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-md border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon className="text-red" size={25} />
                  <p className="mt-4 font-bold text-ink">{item.label}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold text-red">What to expect</p>
              <h2 className="mt-3 font-serif text-5xl font-bold leading-none text-ink sm:text-6xl">
                Accessible worship with a Bible foundation.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                Whether you are seeking a church home or visiting for the first
                time, you will find reverent worship, practical messages, and
                God-honoring music for everyone.
              </p>
            </div>
            <div className="grid gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-md border border-ink/10 bg-paper p-6">
                    <Icon className="text-red" size={30} />
                    <h3 className="mt-4 font-serif text-3xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-lg leading-7 text-muted">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-cream px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex items-center gap-3 text-red">
                <Clock size={26} />
                <p className="font-bold">Weekly Services</p>
              </div>
              <h2 className="mt-4 font-serif text-5xl font-bold text-ink">
                Join us this week.
              </h2>
              <div className="mt-8 grid gap-3">
                {services.map(([name, time]) => (
                  <div key={name} className="flex items-center justify-between rounded-md bg-white p-5 shadow-sm">
                    <span className="font-bold text-ink">{name}</span>
                    <span className="font-bold text-red">{time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md bg-ink p-7 text-white">
              <MapPin className="text-gold" size={30} />
              <h3 className="mt-4 font-serif text-4xl font-bold">Contact & Location</h3>
              <div className="mt-6 space-y-4 text-lg text-white/76">
                <p className="flex gap-3"><MapPin className="mt-1 shrink-0" size={20} />{site.address}</p>
                <p className="flex gap-3"><Phone className="mt-1 shrink-0" size={20} />Voice/Text: {site.phone}</p>
                <p className="flex gap-3"><Video className="mt-1 shrink-0" size={20} />Video Phone: {site.videoPhone}</p>
                <p className="flex gap-3"><Mail className="mt-1 shrink-0" size={20} />{site.email}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-bold text-red">Keep every page</p>
                <h2 className="mt-3 font-serif text-5xl font-bold text-ink">Original content, cleaner paths.</h2>
              </div>
              <Link href="/statement-of-faith" className="inline-flex items-center gap-2 font-bold text-red">
                Read doctrine
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="rounded-md border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon className="text-red" size={26} />
                    <h3 className="mt-4 font-serif text-2xl font-bold text-ink">{page.title}</h3>
                    <p className="mt-2 leading-6 text-muted">{page.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-red px-4 py-12 text-white sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <CalendarDays size={28} />
              <h2 className="mt-3 font-serif text-4xl font-bold">Check back often for more information.</h2>
              <p className="mt-2 text-white/80">We look forward to meeting you.</p>
            </div>
            <Link href="/events" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-red">
              View Events
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
