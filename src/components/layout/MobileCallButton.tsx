import { site } from "@/config/site";
import { ui } from "@/content/ui";

export function MobileCallButton() {
  return (
    <a
      href={`tel:${site.contact.phone}`}
      className="focus-on-primary fixed right-4 bottom-4 left-4 z-[60] hidden h-14 items-center justify-center rounded-[3px] bg-primary text-[17px] font-semibold text-white shadow-[0_12px_32px_-12px_rgba(22,24,27,0.5)] motion-safe:transition-colors hover:bg-primary-hover max-[980px]:flex print:hidden"
    >
      {ui.mobileCall} · {site.contact.phoneDisplay}
    </a>
  );
}
