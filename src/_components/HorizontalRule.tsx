interface HorizontalRuleProps {
  className?: string;
}

export default function HorizontalRule({ className }: HorizontalRuleProps) {
  return <hr className={`${className ?? ""} bg-text-2 opacity-30`} />;
}
