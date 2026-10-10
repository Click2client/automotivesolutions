type TextareaProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
  rows?: number;
};

export function Textarea({
  id,
  name,
  label,
  required = false,
  error,
  defaultValue,
  rows = 3,
}: TextareaProps) {
  const errorId = `${id}-fout`;

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}{" "}
        <span className="font-normal text-secondary">
          {required ? "(verplicht)" : "(optioneel)"}
        </span>
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`resize-y rounded-[3px] border bg-surface px-3.5 py-3 font-sans text-base text-ink focus-visible:border-ink ${
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
