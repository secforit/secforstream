import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AppWalletProvider from "./providers/WalletProvider";
import AuthProvider from "./providers/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SECforSTREAM by SECFORIT - Verify You're Real. Prove Your Stream is Human.",
  description: "Fight deepfakes and AI impersonation with real-time livestream verification. Streamers stake tokens, viewers participate in challenges, everyone proves they're human.",
  keywords: "deepfake, AI verification, livestream, authenticity, proof of human, crypto, web3, SECFORIT",
  openGraph: {
    title: "SECforSTREAM by SECFORIT - Livestream Authenticity Verification",
    description: "Fight deepfakes with real-time verification challenges",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SECforSTREAM - Verify You're Real",
    description: "Fight deepfakes with real-time verification challenges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWalletProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </AppWalletProvider>
        <Analytics />
      </body>
    </html>
  );
}
