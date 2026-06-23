import Link from "next/link";
import { Footer, Header } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-paper px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="font-bold text-red">Page not found</p>
          <h1 className="mt-3 font-serif text-6xl font-bold text-ink">
            This page is not on the new site.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            The main Bible Baptist pages are still available from the home page.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-md bg-red px-6 py-3 font-bold text-white"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
