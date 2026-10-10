"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";

import { submitContact } from "@/app/contact/actions";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactContent } from "@/content/contact";
import { initialContactState } from "@/lib/validation/contact";

type ContactFormProps = {
  siteKey: string;
  fallbackContact: string;
};

export function ContactForm({ siteKey, fallbackContact }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const form = contactContent.form;

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      window.turnstile?.reset();
      statusRef.current?.focus();
    }

    if (state.status === "error") {
      const invalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      if (invalid) invalid.focus();
      else statusRef.current?.focus();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      id="contactformulier"
      action={formAction}
      className="relative grid gap-5 rounded-[4px] border border-line bg-surface-warm p-[clamp(28px,3vw,44px)]"
      noValidate
      aria-busy={pending}
    >
      <p className="mb-1 text-base leading-[1.6] text-body">{form.title}</p>
      <Input
        id="naam"
        name="name"
        label={form.name}
        autoComplete="name"
        required
        error={state.fieldErrors.name}
      />
      <Input
        id="telefoon"
        name="phone"
        type="tel"
        label={form.phone}
        autoComplete="tel"
        required
        error={state.fieldErrors.phone}
      />
      <Textarea
        id="bericht"
        name="message"
        label={form.message}
        rows={3}
        error={state.fieldErrors.message}
      />
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">{form.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {siteKey ? (
        <TurnstileWidget siteKey={siteKey} />
      ) : (
        <p className="text-[13px] text-danger">
          {form.turnstileNotReady} {fallbackContact}.
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button type="submit" variant="ink" disabled={pending} className="h-[50px] px-6 text-[15px]">
          {pending ? form.sending : form.submit}
        </Button>
        <p
          ref={statusRef}
          tabIndex={-1}
          aria-live="polite"
          className={`text-[13px] ${state.status === "error" ? "text-danger" : "text-ink"}`}
        >
          {state.status === "success" ? state.message : null}
          {state.status === "error" && state.message ? state.message : null}
        </p>
      </div>
      <p className="text-[13px] leading-normal text-secondary">
        {form.privacyText}{" "}
        <Link href="/privacy-statement" className="font-medium text-ink underline underline-offset-2">
          {form.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
