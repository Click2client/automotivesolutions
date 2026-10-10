import { z } from "zod";

import { contactContent } from "@/content/contact";

const errors = contactContent.form.errors;

const dutchPhone = /^(?:0[1-9]\d{8}|\+31[1-9]\d{8}|0031[1-9]\d{8})$/;

function isDutchPhone(value: string): boolean {
  return dutchPhone.test(value.replace(/[\s().-]/g, ""));
}

export const contactSchema = z.object({
  name: z.string().trim().min(2, errors.name).max(100, errors.nameLength),
  phone: z.string().trim().refine(isDutchPhone, errors.phone),
  message: z.string().trim().max(5000, errors.messageLength),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactInput;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
