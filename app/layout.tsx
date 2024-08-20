import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbarr";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FilelyMorph",
  description:
    "Convert your files to any format instantly. Just drag and drop your files and convert them effortlessly.",
  keywords: ["file", "converter", "image", "video", "audio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`__next ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          <Navbar />
          <Toaster />
          <div className="pt-16 min-h-screen lg:pt-16 2xl:pt-36 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
