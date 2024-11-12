import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.className} ${gellixThin.variable} ${gellixLight.variable} ${gellixRegular.variable} ${gellixMedium.variable} ${gellixSemiBold.variable} ${gellixBold.variable} ${gellixExtraBold.variable} ${gellixItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
