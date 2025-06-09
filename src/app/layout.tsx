import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citra Komunikasi Utama",
  description:
    "Your Strategic Technology Partner in Indonesia. Empowering companies through smart, scalable, and localized digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans text-gray-800`}>{children}</body>
    </html>
  );
}
