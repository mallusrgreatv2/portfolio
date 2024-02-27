import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "mallusrgreat",
  description: "Backend developer",
  keywords: [
    "mallus",
    "developer",
    "discord",
    "selfbot",
    "bots",
    "minecraft",
    "indian developer",
    "self taught developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          "min-h-screen w-full bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
        <footer className="w-full bg-black py-5 text-center">
          <p className="text-white">
            &copy; 2024{" "}
            <Link
              href="https://github.com/mallusrgreatv2"
              className="underline"
            >
              mallusrgreat
            </Link>{" "}
            |{" "}
            <Link
              href="https://raw.githubusercontent.com/mallusrgreatv2/portfolio/master/LICENSE"
              className="underline"
            >
              MIT License
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
