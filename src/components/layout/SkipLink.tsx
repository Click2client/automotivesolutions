import { ui } from "@/content/ui";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="focus-on-primary sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-[3px] focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
    >
      {ui.skipToContent}
    </a>
  );
}
