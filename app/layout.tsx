import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import React from "react";

import "./globals.css";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

import main from "../public/images/site-logo.svg";

const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.ttf",
  variable: "--font-generalSans",
  weight: "100 200 300 400 500 600 700 800 900",
});

const gellixThin = localFont({
  src: "./fonts/Gellix-Thin.ttf",
  variable: "--font-gellix-thin",
});

const gellixLight = localFont({
  src: "./fonts/Gellix-Light.ttf",
  variable: "--font-gellix-light",
});

const gellixRegular = localFont({
  src: "./fonts/Gellix-Regular.ttf",
  variable: "--font-gellix-regular",
});

const gellixMedium = localFont({
  src: "./fonts/Gellix-Medium.ttf",
  variable: "--font-gellix-medium",
});

const gellixSemiBold = localFont({
  src: "./fonts/Gellix-SemiBold.ttf",
  variable: "--font-gellix-semiBold",
});

const gellixBold = localFont({
  src: "./fonts/Gellix-Bold.ttf",
  variable: "--font-gellix-bold",
});

const gellixExtraBold = localFont({
  src: "./fonts/Gellix-ExtraBold.ttf",
  variable: "--font-gellix-extraBold",
});

const gellixItalic = localFont({
  src: "./fonts/Gellix-Italic.ttf",
  variable: "--font-gellix-italic",
});

const title = "DevFlow";
const desc =
  "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.";

export const metadata: Metadata = {
  title,
  description: desc,
  icons: {
    icon: "/images/site-logo.svg",
  },
  openGraph: {
    title,
    description: desc,
    type: "website",
    images: main.src,
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body
          className={`${generalSans.className} ${gellixThin.variable} ${gellixLight.variable} ${gellixRegular.variable} ${gellixMedium.variable} ${gellixSemiBold.variable} ${gellixBold.variable} ${gellixExtraBold.variable} ${gellixItalic.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
