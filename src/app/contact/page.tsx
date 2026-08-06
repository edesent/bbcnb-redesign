import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, MessageCircle, Phone, Video } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer, Header } from "@/components/SiteShell";
import { services, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bible Baptist Church for the Deaf & Hearing in Seguin, Texas — send a message, call or text, or reach us by video phone.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    label: "Voice or Text",
    value: site.phone,
    href: "tel:+15127575017",
  },
  {
    icon: Video,
    label: "Video Phone",
    value: site.videoPhone,
    href: "tel:+12104299592",
  },
  {
    icon: MapPin,
    label: "Where We Meet",
    value: site.address,
    href: site.map,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink text-white">
          <Image
            src="/hand.png"
            alt=""
            aria-hidden
            width={332}
            height={272}
            className="pointer-events-none absolute -right-8 bottom-0 h-auto w-64 select-none opacity-[0.07] sm:w-80 lg:w-[26rem]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="flex items-center gap-3 text-red">
              <span className="rounded-md bg-red p-2.5 text-white">
                <MessageCircle size={24} />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.22em]">
                Get in Touch
              </p>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.04] sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/75">
              Whether you are Deaf or hearing, we would love to hear from you.
              Send a message and Pastor Parker will answer you personally — or
              reach us by voice, text, or video phone.
            </p>
          </div>
        </section>

        {/* Form + details */}
        <section className="bg-paper px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="font-serif text-3xl font-bold text-ink">
                Send Us a Message
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-body/80">
                Fill out the form below. Every message goes straight to the
                pastor&rsquo;s inbox.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  Reach the Church
                </p>
                <div className="mt-5 space-y-5">
                  {details.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex gap-3.5"
                      >
                        <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md bg-red/10 text-red transition group-hover:bg-red group-hover:text-white">
                          <Icon size={17} />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-ink">
                            {item.label}
                          </span>
                          <span className="block text-sm leading-6 text-body/80 group-hover:text-ink">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  Service Times
                </p>
                <div className="mt-4 space-y-2.5">
                  {services.map(([name, time]) => (
                    <div
                      key={name}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="font-semibold text-ink">{name}</span>
                      <span className="flex-none font-bold text-red-deep">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
                <iframe
                  src={site.mapEmbed}
                  title={`Map to ${site.fullName}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
