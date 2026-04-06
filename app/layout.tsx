import type { Metadata } from "next";
import { Epilogue, Inter, Sora } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/providers/AppShell";
import { siteMeta } from "@/content/site";

const inter = Inter({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${epilogue.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
