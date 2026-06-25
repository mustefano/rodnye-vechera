import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Родные вечера - авторские раскраски по номерам",
  description:
    "Премиальные авторские раскраски по номерам про уютные кухни, дачные вечера, семейные разговоры и тёплые воспоминания.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
