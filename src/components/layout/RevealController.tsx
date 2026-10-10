"use client";

import { useEffect } from "react";

function markVisible(elements: NodeListOf<Element> | Element[]) {
  elements.forEach((element) => element.setAttribute("data-in", ""));
}

export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pending = () => document.querySelectorAll("[data-reveal]:not([data-in])");

    if (reduce) {
      markVisible(document.querySelectorAll("[data-reveal]"));
      return;
    }

    const inView = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-in", "");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    const observe = () => {
      pending().forEach((element) => {
        if (inView(element)) element.setAttribute("data-in", "");
        else observer.observe(element);
      });
    };

    observe();
    const fallback = window.setTimeout(() => markVisible(pending()), 1500);
    const onPrint = () => markVisible(document.querySelectorAll("[data-reveal]"));
    window.addEventListener("beforeprint", onPrint);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("beforeprint", onPrint);
    };
  }, []);

  return null;
}
