import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center xl:justify-between max-w-[1305px] mx-auto">
      <Image
        className="hidden xl:block"
        src="/auth-side-image.png"
        width={805}
        height={781}
        alt="Auth side image"
      />
      {children}
    </div>
  );
}
