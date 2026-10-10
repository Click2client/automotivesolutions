import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { notFoundContent } from "@/content/not-found";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 pt-[104px] outline-none max-[980px]:pt-[84px]">
        <Container className="py-20 sm:py-28">
          <div className="max-w-xl">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-primary uppercase">404</p>
            <h1 className="mt-5 font-heading text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-medium tracking-[-0.025em] text-ink">
              {notFoundContent.heading}
            </h1>
            <p className="mt-4 text-lg leading-[1.7] text-body">{notFoundContent.intro}</p>
            <div className="mt-8">
              <Button href="/">{notFoundContent.homeLink}</Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
