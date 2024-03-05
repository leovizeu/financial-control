"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyHeader from "./components/MyHeader";
import FinanceContextProvider from "@/app/controller/store/finance-context"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "A Finance tracker for controling your money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FinanceContextProvider>
          <MyHeader />
          {children}
        </FinanceContextProvider>
      </body>
    </html>
  );
}
