"use client"

import { Inter } from "next/font/google";
import MyHeader from "./components/MyHeader";
import FinanceContextProvider from "@/app/controller/store/finance-context"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <FinanceContextProvider>
          <MyHeader />
          {children}
        </FinanceContextProvider>
      </body>
    </html>
  );
}
