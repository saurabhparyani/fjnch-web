/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { routing } from "@/i18n/routing";
import NotFound from "./not-found";

const nico = localFont({
  src: "../../assets/fonts/NicoMoji-Regular.ttf",
  variable: "--font-nico",
  weight: "100 900",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "Fjnch | Swiss Personal Finance Management",
    description: "A finance management app for all your needs",
    icons: {
      icon: "/fjnch_appleicon.png",
      apple: "/fjnch_appleicon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Check if the locale is supported
  if (!routing.locales.includes(locale as any)) {
    return <NotFound />;
  }

  let messages;
  try {
    messages = await getMessages(locale as any);
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }

  return (
    <html lang={locale}>
      <body className={`${nico.variable} ${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
