import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elegant Visa",
  description: "Elegant Visa Services",
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Correct type
};


export default async function RootLayout({
  children,
  params,
}:LayoutProps) {
  const messages = await getMessages();
  const {locale} = await params;
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${locale === "ar" ? "rtl":"ltr"}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Nav locale={locale} />
          <div>{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
