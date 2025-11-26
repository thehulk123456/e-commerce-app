interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  name,
  label,
  placeholder,
  required,
}: InputProps) {
  return (
    <div className="w-full">
      {label ? (
        <label className="block text-base font-bold mb-2">{label}</label>
      ) : null}

      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className="px-4 py-3 text-base bg-second-2 rounded-sm w-full"
      />
    </div>
  );
}
