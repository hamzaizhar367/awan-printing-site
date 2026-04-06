import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Awan Printing Point", description: "Pakistan's trusted printing partner since 2000." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
