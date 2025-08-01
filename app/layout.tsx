import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sherwin Rodriguez",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        <AnimatedBackground />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
