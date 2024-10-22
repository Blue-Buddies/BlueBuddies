import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout";

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
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
