import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Footer, Header } from "@/components/SiteShell";
import { site, statementSections } from "@/content/site";

export const metadata: Metadata = {
  title: "Statement of Faith",
  description:
    "The full statement of faith of Bible Baptist Church for the Deaf & Hearing — what we believe about the Scriptures, God, salvation, the church, and more.",
  alternates: { canonical: "/statement-of-faith" },
};

export default function StatementOfFaithPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="flex items-center gap-3 text-red">
              <span className="rounded-md bg-red p-2.5 text-white">
                <BookOpen size={24} />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.22em]">
                Doctrine
              </p>
            </div>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.04] sm:text-6xl">
              Statement of Faith
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/75">
              These are the truths we hold and teach at {site.fullName}. Every
              article rests on the Word of God — the final authority for all we
              believe and practice.
            </p>
            <p className="mt-8 border-l-2 border-red pl-5 font-serif text-lg italic leading-8 text-white/80">
              &ldquo;Thy word is true from the beginning: and every one of thy
              righteous judgments endureth for ever.&rdquo;
              <span className="mt-1 block text-sm not-italic font-bold uppercase tracking-wide text-red">
                Psalm 119:160
              </span>
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-paper px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_1fr]">
            {/* Index */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                The Articles
              </p>
              <nav
                aria-label="Statement of faith sections"
                className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1"
              >
                {statementSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-ink/70 transition hover:bg-white hover:text-ink hover:shadow-sm"
                  >
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded bg-ink/8 font-serif text-xs font-bold text-red transition group-hover:bg-red group-hover:text-white">
                      {section.letter}
                    </span>
                    <span className="hidden lg:inline">{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Articles */}
            <div className="space-y-5">
              {statementSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-cream font-serif text-2xl font-bold text-red">
                      {section.letter}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-serif text-2xl font-bold leading-tight text-ink sm:text-3xl">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-lg leading-8 text-body">
                        {section.text}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-ink/8 pt-5">
                        {section.refs.map((ref) => (
                          <span
                            key={ref}
                            className="inline-flex items-center rounded-full bg-cream px-3 py-1 text-sm font-semibold text-red-deep"
                          >
                            {ref}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Closing call to action */}
              <div className="rounded-xl bg-ink p-8 text-center text-white sm:p-10">
                <h2 className="font-serif text-3xl font-bold">
                  Have a question about what we believe?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-white/75">
                  We would be glad to talk with you by voice, text, video phone,
                  email, or in person. Everyone is welcome at our services.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/the-new-birth"
                    className="inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 font-bold text-white transition hover:bg-red-deep"
                  >
                    How to Be Saved
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                  >
                    Contact the Church
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
