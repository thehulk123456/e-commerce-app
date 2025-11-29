interface FormErrorProps {
  error?: string;
}

export default function FormError({ error }: FormErrorProps) {
  return error ? <div className="text-red-500 text-sm">{error}</div> : null;
}
