type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
};

export function Input({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required = false,
  error,
  defaultValue,
}: InputProps) {
  const errorId = `${id}-fout`;
  const inputMode = type === "email" ? "email" : type === "tel" ? "tel" : undefined;

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}{" "}
        <span className="font-normal text-secondary">
          {required ? "(verplicht)" : "(optioneel)"}
        </span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`h-12 rounded-[3px] border bg-surface px-3.5 font-sans text-base text-ink focus-visible:border-ink ${
          error ? "border-danger" : "border-line-input"
        }`}
      />
      {error ? (
        <p id={errorId} className="text-[13px] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
