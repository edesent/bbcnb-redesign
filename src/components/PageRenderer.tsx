import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SitePage } from "@/content/site";

const accentClass: Record<string, string> = {
  red: "bg-red text-white",
  gold: "bg-red text-white",
  sage: "bg-red text-white",
  sky: "bg-red text-white",
  ink: "bg-ink text-white",
};

export function PageRenderer({ page }: { page: SitePage }) {
  const Icon = page.icon;

  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/hand.png"
          alt=""
          aria-hidden
          width={332}
          height={272}
          className="pointer-events-none absolute -right-8 bottom-0 h-auto w-64 select-none opacity-[0.07] sm:w-80 lg:w-[26rem]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div className="flex items-start gap-4">
            <div className={`rounded-md p-4 ${accentClass[page.accent] ?? accentClass.red}`}>
              <Icon size={34} />
            </div>
            <div>
              <p className="font-bold text-red">{page.eyebrow}</p>
              <h1 className="mt-3 font-serif text-5xl font-bold leading-none sm:text-6xl">
                {page.title}
              </h1>
            </div>
          </div>
          <p className="max-w-2xl self-end text-xl leading-8 text-white/76">
            {page.description}
          </p>
        </div>
      </section>

      <section className="bg-paper px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-7">
          {page.blocks.map((block, index) => {
            if (block.type === "lead") {
              return (
                <p key={index} className="font-serif text-3xl font-semibold leading-10 text-ink">
                  {block.text}
                </p>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p key={index} className="text-lg leading-8 text-body">
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="grid gap-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-ink/10 bg-white px-5 py-4 text-lg font-semibold text-ink shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "embed") {
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm"
                >
                  <iframe
                    src={block.src}
                    title={block.title}
                    height={block.height ?? 900}
                    className="w-full"
                    style={{ border: "0" }}
                    loading="lazy"
                    allow="payment"
                  />
                </div>
              );
            }

            if (block.type === "cards") {
              return (
                <div key={index} className="grid gap-4 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <article key={item.title} className="rounded-md border border-ink/10 bg-white p-5 shadow-sm">
                      <h2 className="font-serif text-2xl font-bold text-ink">{item.title}</h2>
                      <p className="mt-3 leading-7 text-muted">{item.text}</p>
                    </article>
                  ))}
                </div>
              );
            }

            return (
              <blockquote key={index} className="border-l-4 border-red bg-cream p-6">
                <p className="font-serif text-3xl font-semibold leading-10 text-ink">
                  {block.text}
                </p>
                {block.cite ? <cite className="mt-3 block font-bold text-red">{block.cite}</cite> : null}
              </blockquote>
            );
          })}

          {page.cta ? (
            page.cta.href.startsWith("/") ? (
              <Link
                href={page.cta.href}
                className="inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 font-bold text-white transition hover:bg-red-deep"
              >
                {page.cta.label}
                <ArrowRight size={18} />
              </Link>
            ) : (
              <a
                href={page.cta.href}
                className="inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 font-bold text-white transition hover:bg-red-deep"
              >
                {page.cta.label}
                <ArrowRight size={18} />
              </a>
            )
          ) : null}
        </div>
      </section>
    </main>
  );
}
