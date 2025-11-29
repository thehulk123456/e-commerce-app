import FormError from "./FormError";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
}

export default function Input({ name, label, placeholder, error }: InputProps) {
  return (
    <div className="w-full">
      {label ? (
        <label className="block text-base font-bold mb-2">{label}</label>
      ) : null}

      <input
        name={name}
        placeholder={placeholder}
        className="px-4 py-3 text-base bg-second-2 rounded-sm w-full mb-1"
      />

      <FormError error={error} />
    </div>
  );
}
