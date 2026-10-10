"use client";

import { useEffect } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { errorContent } from "@/content/error";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error.digest ?? "page-error");
  }, [error]);

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 pt-[104px] outline-none max-[980px]:pt-[84px]">
        <Container className="py-20 sm:py-28">
          <div className="max-w-xl">
            <h1 className="font-heading text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-medium tracking-[-0.025em] text-ink">
              {errorContent.heading}
            </h1>
            <p className="mt-4 text-lg leading-[1.7] text-body">{errorContent.intro}</p>
            {error.digest ? (
              <p className="mt-4 text-sm text-secondary">
                {errorContent.reference}: {error.digest}
              </p>
            ) : null}
            <div className="mt-8">
              <Button type="button" onClick={() => reset()}>
                {errorContent.retry}
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
