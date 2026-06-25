import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ностальгия красками - авторская раскраска по номерам",
  description:
    "Авторская раскраска по номерам про тёплые воспоминания, спокойные мгновения и уютное состояние, к которому хочется возвращаться.",
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
