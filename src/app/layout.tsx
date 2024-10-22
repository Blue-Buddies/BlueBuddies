import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/stores/store/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "BluBuddies",
  description: "BluBuddiesd의 프로젝트",
  icons: {
    icon: "/assets/BB.ico"
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </Provider>
    </html>
  );
}
