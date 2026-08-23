import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adegbemile Tope | Full-Stack Web Developer",
  description:
    "Portfolio of Adegbemile Tope, a Full-Stack Web Developer and Motion Designer building responsive web applications, backend APIs, and engaging digital experiences.",
  keywords: [
    "Adegbemile Tope",
    "Full-Stack Web Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Laravel Developer",
    "Backend Developer",
    "Motion Designer",
  ],
  authors: [{ name: "Adegbemile Tope" }],
  creator: "Adegbemile Tope",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
