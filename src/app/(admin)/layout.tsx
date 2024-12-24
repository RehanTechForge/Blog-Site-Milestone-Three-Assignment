import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Beauty Blog",
  description:
    "This is a comprehensive beauty blog where you can find tips, trends, and tutorials on skincare, makeup, and wellness. Explore expert advice and discover the latest products to enhance your beauty routine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
