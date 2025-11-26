type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonType = "submit" | "button";

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  type: ButtonType;
  className?: string;
}

const baseButtonClasses = "cursor-pointer text-base";

//TODO Add tertiary button if needed and adjust styling if needed
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-button-2 py-4  px-12 rounded-sm text-text-1 font-medium hover:bg-button-hover",
  secondary: "text-button-2",
  tertiary: "font-medium underline underline-offset-4",
};

export default function Button({
  text,
  variant,
  type,
  className,
}: ButtonProps) {
  return (
    <button
      className={`${className} ${baseButtonClasses} ${variantClasses[variant]} `}
      type={type}>
      {text}
    </button>
  );
}
