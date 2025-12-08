import Header from "@/_components/Header";

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </>
  );
}
